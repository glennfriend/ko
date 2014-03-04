/* --------------------------------------------------------------------------------
    private
-------------------------------------------------------------------------------- */

var wrap = require('co-monk');
var collection = 'users';
var db = FactoryDb();

/* --------------------------------------------------------------------------------
    public
-------------------------------------------------------------------------------- */

exports.list = function *( condition, option )
{

    option              = option                || {}
    option.page         = option.page           || 1;
    option.itemPerPage  = option.itemPerPage    || 3;
    condition           = condition             || {};

    if ( -1 === option.page ) {
        // TODO: get all
    }


    var objs = [];
    var html = '';
    var results = wrap( db.get(collection) );
    console.log ( results.count() );
    return results.find({
        age: { $gt: 6 }
    });


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

exports.create = function *()
{
    var random = function( from, to ) {
        return Math.floor( Math.random() * to ) + from;
    };

    var randomName = function() {
        var map = [
            'alice',
            'bob',
            'carol',
            'eve',
            'erin',
            'frank',
        ];
        return map[
            Math.floor( Math.random() * map.length )
        ];
    };

    var randomPhone = function() {
        return '09' + random(0,9) + random(0,9) + '-'
            + random(100000,999999);
    };

    var results = wrap( db.get(collection) );
    var name = randomName();
    return results.insert({
        name: name,
        phone: randomPhone(),
        email: name + '@hotmail.com',
        address: 'address',
        age: random(10,80)
    });

};

/*
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
*/
