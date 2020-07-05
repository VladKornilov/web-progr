const express = require('express');
const webpack = require('webpack');
const rewrite = require('express-urlrewrite')
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);
const path = require('path')
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

const hbs = require('hbs');
const expressHbs = require("express-handlebars");
const features = require('./data/features.js');

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  writeToDisk: true
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.engine('hbs', expressHbs({
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials'),
  defaultLayout: 'layout',
  extname: 'hbs'
}));


app.get("/index", (request, response) => {response.render("index", {title:"Data Warehouse", features: features})});

app.get("/features", (request, response) => {response.render("features_page", {title:"Features", features: features})});

app.post("/submit", urlencodedParser, (request, response) => {
  console.log("New message in chat: " + request.body["msg"]);
});

//app.get("/", (request, response) => {response.render("index", {title:"Data Warehouse", features: features})});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!\n');
});