/* --------------------------------------------------------------------------------
    include all
-------------------------------------------------------------------------------- */
var app         = require('koa')();
var router      = require('koa-router')(app);
var render      = require('koa-render');
var logger      = require('koa-logger');
thunkify    = require('thunkify');

// mongoose        = require('mongoose');
mongo = require('mongodb');
monk = require('monk');
format = require('util').format;

http            = require('http');
fs              = require('co-fs');


CreateModel = function ( modelName ) {
    var model = require('./model/' + modelName );
    // console.log(model);
    return model;
};





/* --------------------------------------------------------------------------------
    init
-------------------------------------------------------------------------------- */
//
app.use(logger());
app.use(router);

//var dbName = 'test2014';

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
    var controll = require('./controller/db');
    yield controll.list( this );
});




if ( !module.parent ) {
    app.listen(3000);
    console.log('\n  listening on port 3000\n');
}
