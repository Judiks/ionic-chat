package permissionprovider;

import android.content.Context;
import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;

/**
 * This class echoes a string called from JavaScript.
 */
public class PermissionProvider extends CordovaPlugin implements ActivityCompat.OnRequestPermissionsResultCallback {

    private static final int PERMISSION_CODE = 500;
    Context _context = this.cordova.getActivity().getApplicationContext();
    private boolean isReadPermission = false;

    @Override
    public boolean execute(String action, JSONArray model, CallbackContext callbackContext) throws JSONException {
        if (action.equals("requestPermission")) {
            String message = model.getString(0);
            this.requestPermission(message, callbackContext);
            return true;
        }
        if (action.equals("checkPermission")) {
            String message = model.getString(0);
            this.checkPermission(message, callbackContext);
            return true;
        }
        return false;
    }

    private void checkPermission(String message, CallbackContext callbackContext) {
        if (ContextCompat.checkSelfPermission(
                _context, message) ==
                PackageManager.PERMISSION_GRANTED) {
            callbackContext.success();
        } else {
            callbackContext.error("Invalid permission");
        }
    }

    private void requestPermission(String message, CallbackContext callbackContext) {
        ActivityCompat.requestPermissions(this.cordova.getActivity(), new String[]{message}, PERMISSION_CODE);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
        if (grantResults.length > 0
                && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            isReadPermission = true;
        } else {
            isReadPermission = false;
        }
    }
}
