import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subject } from 'rxjs';
import { PermissionDto } from '../dto/permission.dto';

declare let cordova: any;

@Injectable({
    providedIn: 'root'
})
export class PermissionHelper {

    public checkPermissionSubject = new Subject<PermissionDto>();
    constructor(private platform: Platform) { }

    checkPermissionMethod(code: string) {
        this.platform.ready().then(() => {
            cordova.plugins.PermissionProvider.checkPermission(code, (result: string) => {
                this.checkPermissionSubject.next(new PermissionDto(true, code));
            }, err => {
                this.checkPermissionSubject.next(new PermissionDto(false, code));
            });
        });
    }

    public requestPermission(code: string) {
        this.platform.ready().then(() => {
            cordova.plugins.PermissionProvider.requestPermission(code, (result: string) => {
                return true;
            }, err => {
                return false;
            });
        });
    }
}
