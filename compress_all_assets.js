const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');

async function processImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

    const stat = fs.statSync(filePath);
    const sizeMB = stat.size / (1024 * 1024);

    // Skip if already small (< 50 KB)
    if (stat.size < 50 * 1024) {
        console.log(`Skipping small file (${(stat.size / 1024).toFixed(1)} KB): ${path.basename(filePath)}`);
        return;
    }

    const fileBase = path.basename(filePath, ext);
    const dirName = path.dirname(filePath);

    // 1. Create .webp version
    const webpPath = path.join(dirName, `${fileBase}.webp`);
    console.log(`Compressing ${path.basename(filePath)} (${sizeMB.toFixed(2)} MB)...`);

    try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        let pipeline = image;
        if (metadata.width && metadata.width > 1600) {
            pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
        }

        // Output optimized WebP
        await pipeline
            .webp({ quality: 80, effort: 5 })
            .toFile(webpPath);

        const newStat = fs.statSync(webpPath);
        const newMB = newStat.size / (1024 * 1024);
        console.log(`  -> Created ${path.basename(webpPath)}: ${newMB.toFixed(2)} MB (${((1 - newStat.size / stat.size) * 100).toFixed(1)}% reduction)`);

        // 2. Also compress the original PNG/JPG in-place to save bandwidth if components still import original extensions
        const tempPath = path.join(dirName, `temp_${path.basename(filePath)}`);
        let origPipeline = sharp(filePath);
        if (metadata.width && metadata.width > 1600) {
            origPipeline = origPipeline.resize({ width: 1600, withoutEnlargement: true });
        }

        if (ext === '.png') {
            await origPipeline
                .png({ compressionLevel: 9, quality: 80, palette: true })
                .toFile(tempPath);
        } else {
            await origPipeline
                .jpeg({ quality: 80, mozjpeg: true })
                .toFile(tempPath);
        }

        fs.renameSync(tempPath, filePath);
        const compressedStat = fs.statSync(filePath);
        console.log(`  -> Compressed original ${path.basename(filePath)}: ${(compressedStat.size / (1024 * 1024)).toFixed(2)} MB`);
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err.message);
    }
}

async function run() {
    console.log('--- Starting Global Image Optimization ---');
    const files = fs.readdirSync(assetsDir);
    for (const f of files) {
        const fullPath = path.join(assetsDir, f);
        if (fs.statSync(fullPath).isFile()) {
            await processImage(fullPath);
        }
    }
    console.log('--- Optimization Completed! ---');
}

run().catch(console.error);
