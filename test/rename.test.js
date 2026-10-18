'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const { spawnSync } = require('child_process');
const pkg = require('../package.json');
test('renamed to Argus of MCP; mcpscan command kept', () => {
  assert.equal(pkg.name, '@kurtfrancisco/argus');
  assert.equal(pkg.bin.argus, 'bin/mcpscan.js');
  assert.equal(pkg.bin.mcpscan, 'bin/mcpscan.js');
  const r = spawnSync(process.execPath, [path.join(__dirname, '..', 'bin', 'mcpscan.js'), '--help'], { encoding: 'utf8' });
  assert.match(r.stdout + r.stderr, /Argus of MCP/);
});
