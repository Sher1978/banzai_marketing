const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const maskDir = path.join(__dirname, 'public', 'assets', 'cybermask_sequence');
const sherPhoto = path.join(__dirname, 'public', 'assets', 'sher.png');

async function compressDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
    for (const file of files) {
        const filePath = path.join(dir, file);
        const tempPath = path.join(dir, `temp_${file}`);

        console.log(`Compressing ${file}...`);
        await sharp(filePath)
            .resize({ width: 1280 }) // Resize mask down to 720p baseline for web
            .png({ compressionLevel: 9, quality: 70, adaptiveFiltering: true, palette: true })
            .toFile(tempPath);

        fs.renameSync(tempPath, filePath);
    }
}

async function compressFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    const dir = path.dirname(filePath);
    const file = path.basename(filePath);
    const tempPath = path.join(dir, `temp_${file}`);

    console.log(`Compressing ${file}...`);
    await sharp(filePath)
        .resize({ width: 800 }) // Resize founder photo
        .png({ compressionLevel: 9, quality: 70, palette: true })
        .toFile(tempPath);

    fs.renameSync(tempPath, filePath);
}

async function run() {
    console.log('Starting compression...');
    await compressDir(maskDir);
    await compressFile(sherPhoto);
    console.log('Finished compression.');
}

run().catch(console.error);
