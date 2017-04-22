# Mobile web app icon helpers

Scripts to resize and use modern web app icons

# Scripts
- make-apple-sized-icons.js - creates thumbnail images for apple devices
- make-apple-icon-html-headers.js - prints HTML headers for apple devices to standard output
- make-sized-icons.js - creates thumbnail images for web manifest
- make-manifest.js - prints JSON for web manifest to standard output

# Installing
Not much work done here. This could improve with a global npm installation and using an npm module that includes graphicsmagick. Until then, just grab the repo and make sure you have graphicsmagick. So:

- install graphicsmagick with `convert` commmand
- clone this repository


# Examples
Write web manifest JSON to `make-manifest.json` for 144px, 192px, 256px, 384px, 512px thumbnails:
```bash
node make-manifest.js -i base.png 144 192 256 384 512 > make-manifest.json
```

Create 144px, 192px, 256px, 384px, 512px thumbnails in PNG format:
```bash
node make-sized-icons.js -i base.png 144 192 256 384 512
```

Create thumbnails for Apple devices (four sizes):
```bash
node make-apple-sized-icons.js -i base.png
```

Write html <link> tags to `apple-header.snippet.html` for Apple devices:
```bash
node make-apple-icon-html-headers.js -i base.png > apple-header.snippet.html
```

Create a `favicon.ico` file with 32px and 16px sizes:
```bash
node favicon.js -i base.png
```

There is no script for creating a favicon header, see `favicon.html.snippet`.
