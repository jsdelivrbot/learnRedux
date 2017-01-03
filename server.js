var express = require('express')
var rewrite = require('express-urlrewrite')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config')

var app = express()

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
    publicPath: '/build',
    stats: {
        colors: true
    }
}))

var fs = require('fs')
var path = require('path')

fs.readdirSync(path.join(__dirname, "src")).forEach(function (file) {
    if (fs.statSync(path.join(__dirname, "src", file)).isDirectory())
        app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
})

app.use(express.static(__dirname))

app.listen(8081, function () {
    console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})