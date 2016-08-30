/* Reference: https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html
<link rel="apple-touch-icon" href="touch-icon-iphone.png">
<link rel="apple-touch-icon" sizes="76x76" href="touch-icon-ipad.png">
<link rel="apple-touch-icon" sizes="120x120" href="touch-icon-iphone-retina.png">
<link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad-retina.png">
*/

const headers = [
  [60, 'images/touch-icon-iphone.png'],
  [76, 'images/touch-icon-ipad.png'],
  [120, 'images/touch-icon-iphone-retina.png'],
  [152, 'images/touch-icon-ipad-retina.png']
]

function appleTouchIcon (px, name) {
  return `<link rel="apple-touch-icon" sizes="${px}x${px}" href="${name}">`
}

headers.forEach((header) => {
  process.stdout.write(appleTouchIcon(header[0], header[1]) + '\n')
})

module.exports = appleTouchIcon
