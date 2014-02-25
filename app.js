/* --------------------------------------------------------------------------------
    include all
-------------------------------------------------------------------------------- */
var app     = require('koa')();
var router  = require('koa-router')(app);
var render  = require('koa-render');

http        = require('http');
fs          = require('co-fs');


//var demo    = require('./controller/demoPage');

/* --------------------------------------------------------------------------------
    init
-------------------------------------------------------------------------------- */
app.use(router);


/* --------------------------------------------------------------------------------
    router
    .get .post .put .del
    .url .redirect
-------------------------------------------------------------------------------- */

// app.get('/demo/list', demo.list );
app.get('/demo/list', function *() {
    var demo = require('./controller/demoPage');
    yield demo.list(this);
});

app.get('/demo/user/:user', function *() {
    var demo = require('./controller/demoPage');
    yield demo.user( this, this.params.user );
});





if ( !module.parent ) {
    app.listen(3000);
    console.log('\n  listening on port 3000\n');
}
