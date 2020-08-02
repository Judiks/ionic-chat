package permission-provider;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class PermissionProvider extends CordovaPlugin implements ActivityCompat.OnRequestPermissionsResultCallback {

    Context _context = this.cordova.getActivity().getApplicationContext();
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
                context, message) ==
                PackageManager.PERMISSION_GRANTED) {
            callbackContext.success(true);
        } else {
            callbackContext.success(false);
        }
    }

    private void requestPermission(String message, CallbackContext callbackContext) {
        ActivityCompat.requestPermissions(this.cordova.getActivity(), new String[]{message}, PERMISSION_CODE);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String permissions[], int[] grantResults) {
        if (grantResults.length > 0
                && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            isReadPhoneState = true;
        } else {
            isReadPhoneState = false;
        }
    }
}
