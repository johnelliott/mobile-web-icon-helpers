# Mobile web app icon helpers

A set of scripts to automate resizing and markup for modern web app icons

# Overview
apple-icon-resize.js - creates thumbnail images for apple devices
apple-icons.js - prints HTML headers for apple devices to standard output
manifest-icon-resize.js - creates thumbnail images for web manifest
manifest-icons.js - prints JSON for web manifest to standard output

# Installation

Not much work done here. This could improve with a global npm installation and using an npm module that includes graphicsmagick. Until then, just grab the repo and make sure you have graphicsmagick. So:

- install graphicsmagick with `convert` commmand
- clone this repository


# Use
Write web manifest JSON to `manifest-icons.json` for 144px, 192px, 256px, 384px, 512px thumbnails:
```bash
node manifest-icons.js -i base.png 144 192 256 384 512 > manifest-icons.json
```

Create 144px, 192px, 256px, 384px, 512px thumbnails in PNG format:
```bash
node manifest-icon-resize.js -i base.png 144 192 256 384 512
```

Create thumbnails for Apple devices (four sizes):
```bash
node apple-icon-resize.js -i base.png
```

Write html <link> tags to `apple-header.snippet.html` for Apple devices:
```bash
node apple-icons.js -i base.png > apple-header.snippet.html
```

Create a `favicon.ico` file with 32px and 16px sizes:
```bash
node favicon.js -i base.png
```

There is no script for creating a favicon header, see `favicon.html.snippet`.
