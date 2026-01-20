#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');
const searchDir = path.join(buildDir, 'search');

if (!fs.existsSync(buildDir)) {
  console.error('build/ does not exist. Run `npm run build` first.');
  process.exit(1);
}

const files = fs.readdirSync(buildDir);
const hasIndex = files.some((name) => name.startsWith('search-index') && name.endsWith('.json'));
const hasSearchPage = fs.existsSync(searchDir);

if (!hasIndex || !hasSearchPage) {
  console.error('Search assets missing from build output.');
  console.error(`- search index present: ${hasIndex}`);
  console.error(`- search page present: ${hasSearchPage}`);
  console.error('Rebuild with the local search plugin enabled and deploy the full build/.');
  process.exit(1);
}

console.log('Search assets found in build output.');

