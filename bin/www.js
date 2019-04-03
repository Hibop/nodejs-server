#! /usr/bin/env node

let commander = require('commander');
let chalk = require('chalk');
let {version} = require('../package.json');
let {exec} = require('child_process');

console.log("hello", version, commander);

commander.option('-p,--port <n>', 'config port')
.option('-o,--host [value]', 'config hostname')
.option('-d,--dir [value]', 'config directory')
.version(version, '-v,--version')
.on('--help', function () {
  console.log('  Examples:');
  console.log('');
  console.log('    this is an example');
  console.log('');
})
.parse(process.argv);


exec(`start ${'gogo' + chalk.blue(version)} http://${commander.host}:${commander.port}`);
