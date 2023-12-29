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
$ npm run build
```

Will build your game and package into a .zip file, you can upload to your server or itch.io / newground etc.

```sh
$ npm run prod:bundle
```

If you have a linux machine please run this command to build and zip on linux:
```sh
$ npm run prod:bundle2
```

