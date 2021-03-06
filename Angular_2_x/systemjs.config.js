/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        map: {
            'main': './js',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/material': 'npm:@angular/material/material.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            "socket.io-client": "npm:socket.io-client/dist/socket.io.js",
            "@polymer": "npm:@polymer",
            "@vaadin/angular2-polymer": "npm:@vaadin/angular2-polymer",
            "hammerjs": "npm:hammerjs",
            "alx-dragdrop/DragDropModule": "npm:alx-dragdrop"
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            'main': {main: 'main.js', defaultExtension: 'js', format: 'register'},
            'rxjs': {defaultExtension: 'js'},
            "socket.io-client": {"defaultExtension": "js"},
            "paper-slider": {main: "paper-slider.html"},
            "@vaadin/angular2-polymer": {main: "./index.js", defaultExtension: "js"},
            "hammerjs": {main: "./hammer.min.js", defaultExtension: "js"},
            "alx-dragdrop/DragDropModule": {main: "./DragDropModule.js", defaultExtension: "js"}
        }
    }); // end of System.config

})(this);



/**
(function(global) {
  // map tells the System loader where to look for things
    var map = {
        'main':                         './js',
        '@angular':                     './node_modules/@angular',
        'angular2-in-memory-web-api':   './node_modules/angular2-in-memory-web-api',
        'rxjs':                         './node_modules/rxjs',
        "socket.io-client":             "./node_modules/socket.io-client/socket.io.js",
        "@polymer":                     "./node_modules/@polymer",
        "@vaadin/angular2-polymer":     "./node_modules/@vaadin/angular2-polymer"
    };
  // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'main':                         { main: 'main.js',  defaultExtension: 'js', format: 'register' },
        'rxjs':                         { defaultExtension: 'js' },
        'angular2-in-memory-web-api':   { main: 'index.js', defaultExtension: 'js' },
        "socket.io-client":             {"defaultExtension": "js"},
        "paper-slider":                 { main: "paper-slider.html" },
        "@vaadin/angular2-polymer":     { main: "./index.js", defaultExtension: "js" }
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages,
    meta: {
      'typescript': {
        "exports": "ts"
      }
    }
  };
  System.config(config);
})(this);
**/