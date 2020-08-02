var exec = require('cordova/exec');

exports.requestPermission = function (model, success, error) {
    exec(success, error, 'PermissionProvider', 'requestPermission', [model]);
};

exports.checkPermission = function (model, success, error) {
    exec(success, error, 'PermissionProvider', 'checkPermission', [model]);
};