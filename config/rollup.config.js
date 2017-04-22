export default {
  entry: 'dist/es5/api.js',
  dest: 'dist/bundle/od-vsdebug.umd.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'od.vsdebug',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    // 'rxjs/Observable': 'Rx',
    // 'rxjs/ReplaySubject': 'Rx',
    // 'rxjs/add/operator/map': 'Rx.Observable.prototype',
    // 'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    // 'rxjs/add/observable/fromEvent': 'Rx.Observable',
    // 'rxjs/add/observable/of': 'Rx.Observable'
  }
}