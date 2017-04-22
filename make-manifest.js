/* Sample output:
  "icons": [
    {
      "src": "images/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "images/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "images/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "images/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "images/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
*/

const resizer = require('./manifest-icon-resize.js')

function makeGoogleIconEntry(size) {
  return {
      "src": `images/icon-${size}x${size}.png`,
      "sizes": `${size}x${size}`,
      "type": "image/png"
    }
}

function makeIconsJson(sizes) {
  const icons = []
  sizes.forEach(size => icons.push(makeGoogleIconEntry(size)))
  const result = {icons}
  return JSON.stringify(result, null, 2)
}


if (module === require.main) {
  const argv = require('minimist')(process.argv.slice(2))
  const sizes = argv._
  //const inputFile = argv.input || argv.i
  //resizer(inputFile, argv._)
  process.stdout.write(makeIconsJson(sizes))
}

module.exports = makeIconsJson
