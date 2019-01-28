const merge = require('concat');

const files = [
    './dist/weathercard/runtime.js',
    './dist/weathercard/polyfills.js',
    './dist/weathercard/scripts.js',
    './dist/weathercard/main.js'
]

merge(files, './dist/weathercard/weathercard.js');
console.info('file generated');