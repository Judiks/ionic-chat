var exec = require('cordova/exec');

exports.requestPermission = function (name, code, success, error) {
    exec(success, error, 'PermissionProvider', 'requestPermission', [name, code]);
};

exports.checkPermission = function (name, success, error) {
    exec(success, error, 'PermissionProvider', 'checkPermission', [name]);
};