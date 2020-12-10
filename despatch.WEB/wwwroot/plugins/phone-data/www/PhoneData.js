cordova.define("phone-data.PhoneData", function(require, exports, module) { var exec = require('cordova/exec');

exports.getData = function (success, error) {
    exec(success, error, 'PhoneData', 'getData');
};

});
