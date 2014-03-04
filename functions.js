var config = require('./config.inc.js');

/**
 *  create model
 */
GLOBAL.FactoryModel = function ( modelName ) {
    if ( !modelName ) {
        return null;
    }
    var model = require('./model/' + modelName );
    // console.log(model);
    return model;
};

/**
 *  create model
 */
GLOBAL.FactoryDb = function () {
    var db = config.database.name;
    var monk = require('monk');
    var object = monk('localhost/' + db );
    return object;
};

