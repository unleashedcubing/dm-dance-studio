import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const files = ['index.html', 'privacy.html', 'terms.html', '404.html', 'pitch-deck/index.html'];
const failures = [];

for (const file of files) {
  if (!existsSync(file)) {
    failures.push(`${file}: missing page`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  const attributes = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const target of attributes) {
    if (!target || /^(?:https?:|tel:|mailto:|#|data:)/.test(target)) continue;
    const cleanTarget = target.split('#')[0]?.split('?')[0];
    if (!cleanTarget) continue;
    const path = cleanTarget.startsWith('/') ? resolve(`.${cleanTarget}`) : resolve(dirname(file), cleanTarget);
    const candidates = [path, `${path}.html`, resolve(path, 'index.html')];
    if (!candidates.some(existsSync)) failures.push(`${file}: broken local target ${target}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Checked ${files.length} pages: no broken local asset or page links.`);
