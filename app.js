require ('newrelic');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression')

var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');
var projectsApiRouter = require('./routes/api/projects');

const { SitemapStream, streamToPromise } = require('sitemap')
const { createGzip } = require('zlib')

require('dotenv').config()


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/dashboard', indexRouter);
app.use('/projects', projectsRouter);
app.use('/api/projects', projectsApiRouter);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

let sitemap
app.get('/sitemap.xml', function(req, res) {
  res.header('Content-Type', 'application/xml');
  res.header('Content-Encoding', 'gzip');
  // if we have a cached entry send it
  if (sitemap) {
    res.send(sitemap)
    return
  }
  try {
    const smStream = new SitemapStream({ hostname: 'http://opensourceappfinder.com/' })
    const pipeline = smStream.pipe(createGzip())

    smStream.write({ url: '/',  changefreq: 'daily', priority: 0.7 })
    smStream.end()

    // cache the response
    streamToPromise(pipeline).then(sm => sitemap = sm)
    // stream the response
    pipeline.pipe(res).on('error', (e) => {throw e})
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'This page does not exist'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
