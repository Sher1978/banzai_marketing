import fs from 'fs';
import path from 'path';

export default function Geo2026Page() {
  const htmlPath = path.join(process.cwd(), 'public', 'geo2026.html');
  let htmlContent = '';
  try {
    const fsNode = require('fs');
    htmlContent = fsNode.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    htmlContent = '';
  }

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
      style={{ width: '100%', minHeight: '100vh' }}
    />
  );
}
