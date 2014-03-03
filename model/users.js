/* --------------------------------------------------------------------------------
    private
-------------------------------------------------------------------------------- */

var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/vcard3');
var collection = 'users';


/* --------------------------------------------------------------------------------
    public
-------------------------------------------------------------------------------- */

exports.list = function *( condition, option )
{

    option              = option                || {}
    option.page         = option.page           || 1;
    option.itemPerPage  = option.itemPerPage    || 3;
    condition           = condition             || {};
/*
    if ( -1 === option.page ) {
        99999;
    }
*/

    var objs = [];
    var html = '';
    var results = wrap( db.get(collection) );
    return results.find({});


/*
    results.find({name: 'vivi'}, function(error, items) {
        var item = {};
        for ( var index in items ) {
            item = items[index];
            objs[ objs.length ] = item;

            html += item.email+' , ';
            //console.log('bbc');
        }
    });

    obj.find({}).exec(function(err, result) {
        var len = result.length;
        var counter = 0;
        result.forEach( function(item) {
            counter++;
            if ( counter > option.itemPerPage ) {
                return;
            }
            console.log( item );
            console.log('------------------------------------------------------------');
        });

    });
*/

};



exports.schema = function *()
{
    var schema = {
        mandatory: {
            name: 'string',
            phone: 'string',
            email: 'string',
            address: 'string',
            age: 'Number'
        },
        optional: {
            author: 'string',
            type: 'string'
        }
    };

    yield schema;
};

exports.index = function *()
{
    var index = [
        {
            key: 'name'
        },
        {
            key: 'phone',
            options: { unique: true }
        }
    ];

    yield index;
};
