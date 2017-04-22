#!/usr/bin/env node

const spawn = require('child_process').spawn

function resize(file) {
  // format output file name for apple devices
  spawn('convert', [file, '-resize', `60`, `touch-icon-iphone.png`])
  spawn('convert', [file, '-resize', `76`, `touch-icon-ipad.png`])
  spawn('convert', [file, '-resize', `120`, `touch-icon-iphone-retina.png`])
  spawn('convert', [file, '-resize', `152`, `touch-icon-ipad-retina.png`])
}

// stand-alone script
if (module === require.main) {
  const argv = require('minimist')(process.argv.slice(2))
  const inputFile = argv.input || argv.i
  resize(inputFile)
}

module.exports = resize
