const spawn = require('child_process').spawn

function resize(file, sizes) {
  sizes.forEach(size => {
    // format output file name for web manifest
    spawn('convert', [file, '-resize', `${size}`, `icon-${size}x${size}.png`])
  })
}

// stand-alone script
if (module === require.main) {
  const argv = require('minimist')(process.argv.slice(2))
  const inputFile = argv.input || argv.i
  const sizes = argv._
  resize(inputFile, sizes)
}

module.exports = resize
