var browserSync = require('browser-sync');

browserSync({
  open: false,
  logLevel: "debug",
  logFileChanges: true,
  reloadDelay: 200,
  reloadDebounce: 500,
  files: ['src/*.ts', 'demo/*.ts', 'demo/*.html', 'systemjs.config.js'],
  watchOptions: {ignored: 'node_modules'},
  server: {baseDir: './',directory: true}
});