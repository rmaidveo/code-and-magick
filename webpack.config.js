const path = require("path");

module.exports = {
  entry: [
    "./js/game.js",
    "./js/constats.js",
    "./js/debounce.js",
    "./js/render.js",
    "./js/util.js",
    "./js/move.js",
    "./js/dialog.js",
    "./js/backend.js",
    "./js/setup.js",
    "./js/stat.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
