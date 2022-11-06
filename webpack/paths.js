const path = require('path');

const rootPath =  path.resolve(__dirname, "../")

const paths = {
  root: rootPath,
  output: path.resolve(rootPath, "dist"),
  template: path.resolve(rootPath, "public/index.html"),
  entryPath: path.resolve(rootPath, "src/index.js"),
  src: path.resolve(rootPath, "src"),
  public: path.resolve(rootPath, "public"),
  lib: path.resolve(rootPath, "src/lib")
}

module.exports = paths