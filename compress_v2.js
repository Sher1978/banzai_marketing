const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const framesDir = path.join(__dirname, 'public', 'assets', 'cybermask_sequence');
const desktopDir = path.join(__dirname, 'public', 'assets', 'mask', 'desktop');
const mobileDir = path.join(__dirname, 'public', 'assets', 'mask', 'mobile');
const founderPhotoSrc = path.join(__dirname, 'public', 'assets', 'sher-profile.jpg'); // or sher.png depending on what was used. Let's try sher-profile.jpg
const founderPhotoDest = path.join(__dirname, 'public', 'assets', 'sher-profile.webp');

// Ensure output directories exist
if (!fs.existsSync(desktopDir)) fs.mkdirSync(desktopDir, { recursive: true });
if (!fs.existsSync(mobileDir)) fs.mkdirSync(mobileDir, { recursive: true });

async function processFrames() {
    console.log('Starting WebP Mask Compression...');
    for (let i = 7; i <= 39; i++) {
        const input = path.join(framesDir, `frame_${i}.png`);
        if (!fs.existsSync(input)) {
            console.warn(`Missing frame: ${input}`);
            continue;
        }

        // Desktop WebP
        await sharp(input)
            .resize(1280)
            .webp({ quality: 80, effort: 6 })
            .toFile(path.join(desktopDir, `frame_${i}.webp`));

        // Mobile WebP
        await sharp(input)
            .resize(640)
            .webp({ quality: 75, effort: 6 })
            .toFile(path.join(mobileDir, `frame_${i}.webp`));

        console.log(`Processed frame_${i}.png -> WebP (Desktop/Mobile)`);
    }
}

async function processFounder() {
    console.log('Starting Founder Photo WebP Compression...');
    if (fs.existsSync(founderPhotoSrc)) {
        await sharp(founderPhotoSrc)
            .resize(800)
            .webp({ quality: 80, effort: 6 })
            .toFile(founderPhotoDest);
        console.log('Processed founder photo -> WebP');
    } else {
        console.warn(`Founder photo not found at ${founderPhotoSrc}`);
    }
}

async function run() {
    await processFrames();
    await processFounder();
    console.log('Maximum Acceleration WebP Compression Complete.');
}

run().catch(console.error);
