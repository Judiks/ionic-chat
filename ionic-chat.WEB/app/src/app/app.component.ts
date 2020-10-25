import { Component, HostListener, NgZone } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PermissionHelper } from './shared/helpers/permission-helper';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { PermissionDto } from './shared/dto/permission.dto';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  constructor(
    platform: Platform, private permissionHelper: PermissionHelper,
    private permission: AndroidPermissions
  ) {
    platform.ready().then(() => {
      permissionHelper.checkPermissionMethod(this.permission.PERMISSION.READ_PHONE_STATE);
      permissionHelper.checkPermissionMethod(this.permission.PERMISSION.READ_SMS);
      permissionHelper.checkPermissionMethod(this.permission.PERMISSION.RECEIVE_SMS);
      permissionHelper.checkPermissionMethod('android.permission.READ_PHONE_NUMBERS');
    });

  }
}
