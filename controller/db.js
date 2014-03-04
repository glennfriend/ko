
/* --------------------------------------------------------------------------------
    private
-------------------------------------------------------------------------------- */

// var getView = function( file )
// {
//     return './controller/views/demoPage/' + file + '.htm';
// }


/* --------------------------------------------------------------------------------
    public 
-------------------------------------------------------------------------------- */

exports.list = function *(app)
{
    var users = FactoryModel('users');
     var value = yield users.list().next().value;
    // var value = yield users.list();

    console.log('--------------');
    console.log(value);
    app.body = value;
}

exports.create = function *(app)
{
    var users = FactoryModel('users');
    var value = yield users.create().next().value;

    app.body = value;
}

