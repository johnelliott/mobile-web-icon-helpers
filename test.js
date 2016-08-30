const test = require('tape')
const appleIcon = require('./apple-icons.js')
const manifestIcons = require('./manifest-icons.js')
// TODO const iconResize = require('./manifest-icon-resize.js')
// TODO const iconResize = require('./apple-icon-resize.js')

test('apple icons module', function (t) {
  t.plan(1)
  const expected = '<link rel="apple-touch-icon" sizes="76x76" href="images/touch-icon-ipad.png">'
  t.equal(appleIcon(76, 'images/touch-icon-ipad.png'), expected)
})

test('web manifest icons module', function (t) {
  t.plan(1)
  const expectedString = `{
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
}`
  t.deepEqual(manifestIcons([144, 192, 256, 384, 512]), expectedString)
})
