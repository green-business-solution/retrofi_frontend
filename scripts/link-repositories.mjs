import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const links = JSON.parse(fs.readFileSync(path.join(root, 'repository-links.json'), 'utf8'));
for (const [name, target] of Object.entries(links)) {
  const destination = path.join(root, name);
  const source = path.resolve(root, target);
  // Build output may not exist until the frontend build completes.
  if (!fs.existsSync(source) && name !== 'dist') throw new Error(`Missing dependency ${source}. Clone the three RetroFi repositories beside one another first.`);
  const relative = path.relative(path.dirname(destination), source);
  try {
    const stat = fs.lstatSync(destination);
    if (!stat.isSymbolicLink() || fs.readlinkSync(destination) !== relative) throw new Error(`Refusing to replace existing ${destination}`);
    continue;
  } catch (error) { if (error.code !== 'ENOENT') throw error; }
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.symlinkSync(relative, destination);
}
console.log('RetroFi sibling dependencies are linked.');
