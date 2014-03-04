/* --------------------------------------------------------------------------------
    global
-------------------------------------------------------------------------------- */
require('./functions');


/* --------------------------------------------------------------------------------
    include all
-------------------------------------------------------------------------------- */
// var config      = require('./config.inc.js');
var app         = require('koa')();
var router      = require('koa-router')(app);
var logger      = require('koa-logger');
//var render      = require('koa-render');
// thunkify    = require('thunkify');
// mongo = require('mongodb');
// format = require('util').format;
// http            = require('http');


/* --------------------------------------------------------------------------------
    init
-------------------------------------------------------------------------------- */
//
app.use(logger());
app.use(router);



/* --------------------------------------------------------------------------------
    router
    .get .post .put .del
    .url .redirect
-------------------------------------------------------------------------------- */


app.get( ['/', '/demo/list'], function *() {
    yield require('./controller/demoPage').list(this);
});

app.get( '/demo/user/:user', function *() {
    var controll = require('./controller/demoPage');
    yield controll.user( this, this.params.user );
});

app.get( '/db/list', function *() {
    yield require('./controller/db').list(this);
});
app.get( '/db/create', function *() {
    yield require('./controller/db').create(this);
});



if ( !module.parent ) {
    app.listen(3000);
    console.log('\n  listening on port 3000\n');
}
