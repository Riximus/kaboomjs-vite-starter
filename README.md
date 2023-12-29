# Folder structure

- `src` - source code for your kaboom project
- `www` - distribution folder, contains your index.html, built js bundle and static assets


## Development

For starting the dev server on localhost:
```sh
$ npm run dev:serve
```
To see the changes with hot reloading:
```sh
$ npm run dev:watch
```

## Distribution

Will build and minify your js files into `www/js/main.js`:
```sh
$ npm run prod:build
```

Will build your game (powershell) and package into a .zip file, you can upload to your server or itch.io / newground etc.

```sh
$ npm run prod:bundleW
```

If you have a unix machine please run this command to build and zip on linux:
```sh
$ npm run prod:bundleL
```

