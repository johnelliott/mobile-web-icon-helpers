#!/usr/bin/env node
const spawn = require('child_process').spawn
const fs = require('fs')
const path = require('path')

/* Reference: https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html

  Sun Jan 14 22:50:54 EST 2018

  <link rel="apple-touch-icon" href="touch-icon-iphone.png">
  <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad.png">
  <link rel="apple-touch-icon" sizes="180x180" href="touch-icon-iphone-retina.png">
  <link rel="apple-touch-icon" sizes="167x167" href="touch-icon-ipad-retina.png">
*/

const sizes = [180, 167, 160, 152, 80, 512, 192, 384, 144, 192]
function appleTouchIconName (size) {
  return `apple-touch-icon-${size}x${size}.png`
}

function manifestIconName (size) {
  return `icon-${size}x${size}.png`
}

function appleTouchIconLinkTag (size) {
  return `<link rel="apple-touch-icon" sizes="${size}x${size}" href="${appleTouchIconName(size)}">`
}
function makeGoogleIconEntry (size) {
  return {
    src: `/icon-${size}x${size}.png`,
    sizes: `${size}x${size}`,
    type: 'image/png'
  }
}
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

function makeIconsJson (sizes) {
  const icons = []
  sizes.forEach(size => icons.push(makeGoogleIconEntry(size)))
  const result = {icons}
  return JSON.stringify(result, null, 2)
}

// stand-alone script
if (module === require.main) {
  const argv = require('minimist')(process.argv.slice(2))
  const source = argv.input || argv.i
  if (!source) {
    console.error('no input file specified with -i')
    process.exit(1)
  }

  // make favicon.ico
  spawn('convert', [
    source,
    '-alpha',
    'off',
    '-resize',
    '32x32',
    '-define',
    'icon:auto-resize=32,16',
    'favicon.ico'
  ])

  // make apple icons
  const headers = sizes
    .map(size => {
      spawn('/usr/local/bin/convert', [source, '-resize', size, appleTouchIconName(size)])
      return appleTouchIconLinkTag(size)
    })
    .concat(['<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">'])
    .join('\n')
  const headersPath = path.join(__dirname, 'apple-icon-headers.html.txt')
  fs.writeFileSync(headersPath, headers)

  // make google icons
  sizes.forEach(size => {
    spawn('/usr/local/bin/convert', [source, '-resize', size, manifestIconName(size)])
  })

  const manifestPath = path.join(__dirname, 'manifest.json')
  fs.writeFileSync(manifestPath, makeIconsJson(sizes))
}
