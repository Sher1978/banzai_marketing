const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const founderPhotoSrc = path.join(__dirname, 'public', 'assets', 'sher-profile.jpg');
const founderPhotoDest = path.join(__dirname, 'public', 'assets', 'sher-profile.webp');

async function processFounder() {
    console.log('Starting Founder Photo WebP Compression (Bypassing SOS errors)...');
    if (fs.existsSync(founderPhotoSrc)) {
        await sharp(founderPhotoSrc, { failOnError: false })
            .resize(800)
            .webp({ quality: 80, effort: 6 })
            .toFile(founderPhotoDest);
        console.log('Processed founder photo -> WebP');
    } else {
        console.warn(`Founder photo not found at ${founderPhotoSrc}`);
    }
}

processFounder().catch(console.error);
