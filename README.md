# WeatherElement

This is upgraded to Angular 11. If you want the old version please checkout old branch

# WeatherElement

npm install

# WeatherElement

npm run weathercardbuild to generate files inside dist/weather-element

Edit the index.html like below and remove all unused JS files except weathercard.js


```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>WeatherElement</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="styles.css"></head>
<body>
<app-weather unit="metric" location="Atlanta"></app-weather>
<script src="./weathercard.js"></script>
</body>
</html>
```
use any http-server to run the index.html
