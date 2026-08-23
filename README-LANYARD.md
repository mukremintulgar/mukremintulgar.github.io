# React Bits Lanyard + Quarto integration

This package keeps the Quarto portfolio intact and replaces only the static
profile image card on the homepage with a compiled React/Vite Lanyard widget.

## Why there is a Vite sub-project

React Bits Lanyard is JSX and depends on React Three Fiber / Three.js / Rapier.
A Quarto page cannot execute JSX directly. The `lanyard-widget/` folder is an
isolated React island which is built to static HTML/JS and embedded into Quarto
with an iframe.

## Install

Copy everything in this package into the root of your portfolio project.

Then from PowerShell in the portfolio root run:

    powershell -ExecutionPolicy Bypass -File .\setup-lanyard.ps1

The script:
1. downloads the official React Bits `card.glb`,
2. runs `npm install` inside `lanyard-widget`,
3. runs `npm run build`.

Then run:

    quarto render
    quarto preview

## React Bits configuration used

    <Lanyard
      position={[0, 0, 20]}
      gravity={[0, -40, 0]}
      frontImage="./profile.jpg"
      imageFit="cover"
      lanyardWidth={1}
    />

The uploaded profile photo is copied into the widget and becomes the front face
of the badge. Remove `frontImage` in `App.jsx` if you want the original React
Bits card artwork instead.

## Custom card faces / band

Edit `lanyard-widget/src/App.jsx`, for example:

    <Lanyard
      position={[0,0,24]}
      gravity={[0,-40,0]}
      frontImage="./my-front.png"
      backImage="./my-back.png"
      imageFit="cover"
      lanyardImage="./my-band.png"
      lanyardWidth={1}
    />

Place public custom images in `lanyard-widget/public/`.

## Important files

- `lanyard-widget/src/Lanyard.jsx` — React Bits JS-CSS source
- `lanyard-widget/src/Lanyard.css` — React Bits CSS source
- `lanyard-widget/src/card.glb` — downloaded by setup script
- `lanyard-widget/src/lanyard.png` — official React Bits band texture
- `lanyard-widget/public/profile.jpg` — your profile image
- `lanyard-widget/vite.config.js` — includes `assetsInclude: ['**/*.glb']`
- `index.qmd` — embeds the built widget in the hero
- `_quarto.yml` — copies `lanyard-widget/dist/**` into `_site`

## Publishing

After previewing:

    git add .
    git commit -m "Add interactive React Bits lanyard"
    git push origin main
    quarto publish gh-pages

You should commit the generated `lanyard-widget/dist/` folder as well, because
the Quarto page embeds that static build.

## Upstream sources

Registry:
https://reactbits.dev/r/Lanyard-JS-CSS.json

Component docs:
https://reactbits.dev/components/lanyard

Official assets:
https://github.com/DavidHDev/react-bits/tree/main/src/content/Components/Lanyard
