const spawn = require('child_process').spawn

function resize(file) {
	console.log(file)
	spawn('convert', [
		file,
		'-alpha',
		'off',
		'-resize',
		'32x32',
		'-define',
		'icon:auto-resize=32,16',
		'favicon.ico'
	])}

// stand-alone script
if (module === require.main) {
  const argv = require('minimist')(process.argv.slice(2))
  const inputFile = argv.input || argv.i
	console.log(inputFile)
	console.log(argv)
  resize(inputFile)
}

module.exports = resize
