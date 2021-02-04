const merge = require('concat');

const files = [
  './dist/weather-element/main.js',
  './dist/weather-element/polyfills.js',
  './dist/weather-element/runtime.js'
]

merge(files, './dist/weather-element/weathercard.js');
console.info('file generated');
