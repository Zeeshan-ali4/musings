import { readFile } from 'node:fs/promises';

const securityTxt = await readFile(new URL('../public/.well-known/security.txt', import.meta.url), 'utf8');
if (securityTxt.includes('REPLACE-WITH-SECURITY-CONTACT')) {
  console.error('security.txt contains the required pre-production contact placeholder. Replace it before deployment.');
  process.exit(1);
}
console.log('security.txt contact placeholder has been replaced.');
