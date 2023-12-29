This is a modified version of the official ```npm init kaboom mygame``` template. This version includes [Vite](https://vitejs.dev/)
for hot reloading. You have to run the **serve** and **watch** commands in two separate terminals.
There is also two build commands, one for windows and one for unix.

Check out the [kaboom.js](https://kaboomjs.com/) docs for more info and their github
[repository](https://github.com/replit/kaboom)!

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

