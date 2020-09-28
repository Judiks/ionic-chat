package permissionprovider;

import android.content.Context;
import android.content.pm.PackageManager;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;

import java.util.ArrayList;
import java.util.List;

/**
 * This class echoes a string called from JavaScript.
 */
public class PermissionProvider extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray model, CallbackContext callbackContext) throws JSONException {
        if (action.equals("requestPermission")) {
            JSONArray jsonArray = model.getJSONArray(0);
            List<String> permissions = new ArrayList<String>();
            for (int i = 0; i < jsonArray.length(); i++){
                permissions.add(jsonArray.getString(i));
            }
            int code = model.getInt(1);
            this.requestPermission(permissions.toArray(new String[permissions.size()]), code, callbackContext);
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
        Context _context = this.cordova.getActivity().getApplicationContext();
        if (ContextCompat.checkSelfPermission(
                _context, message) ==
                PackageManager.PERMISSION_GRANTED) {
            callbackContext.success();
        } else {
            callbackContext.error("Invalid permission");
        }
    }

    private void requestPermission(String[] permissions, int PERMISSION_CODE, CallbackContext callbackContext) {
        ActivityCompat.requestPermissions(this.cordova.getActivity(), permissions, PERMISSION_CODE);
    }

}
