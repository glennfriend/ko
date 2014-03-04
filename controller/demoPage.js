/* --------------------------------------------------------------------------------
    private
-------------------------------------------------------------------------------- */

var fs = require('co-fs');

var db = {
    tobi: { name: 'tobi', species: 'ferret' },
    loki: { name: 'loki', species: 'ferret' },
    jane: { name: 'jane', species: 'ferret' }
};

var getView = function( file )
{
    return './controller/views/demoPage/' + file + '.htm';
}

/* --------------------------------------------------------------------------------
    public 
-------------------------------------------------------------------------------- */
// version
exports.version = '0.0.1';

exports.list = function *(app)
{
    var view = getView('list');
    var HtmlGen = yield fs.readFile( view, 'utf8' );
    app.body = HtmlGen;
}

exports.user = function *(app, user)
{
    app.body = 'user is ' + user;
}



/*
module.exports = function() {

    var obj = {
        version: "0.0.1",   // version
        buffer: []          // 記錄所有儲存的資料
    };

    obj.list = function *() {}

}
*/
