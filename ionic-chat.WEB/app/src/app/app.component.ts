import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PermissionHelper } from './shared/helpers/permission-helper';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  constructor(platform: Platform, private permissionHelper: PermissionHelper, private permission: AndroidPermissions) {
    permissionHelper.checkPermissionSubject.subscribe(result => {
      if (!result.isActive) {
        permissionHelper.requestPermission(result.code);
      }
    });
    platform.ready().then(() => {
      permissionHelper.checkPermissionMethod(this.permission.PERMISSION.READ_PHONE_STATE);
      permissionHelper.checkPermissionMethod(this.permission.PERMISSION.READ_SMS);
      permissionHelper.checkPermissionMethod(this.permission.PERMISSION.READ_PHONE_NUMBERS);
    });
  }
}
