import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AsyncSubject, Subject } from 'rxjs';
import { PermissionDto } from '../dto/permission.dto';

declare let cordova: any;

@Injectable({
    providedIn: 'root'
})
export class PermissionHelper {

    private checkPermissionSubject = new Subject<PermissionDto>();
    constructor(private platform: Platform) { }

    checkPermissionMethod(permission: string) {
        this.platform.ready().then(() => {
            cordova.plugins.PermissionProvider.checkPermission(permission, (result: string) => {
                this.checkPermissionSubject.next(new PermissionDto(true, Math.random() * 100, permission));
            }, err => {
                this.checkPermissionSubject.next(new PermissionDto(false, Math.random() * 100, permission));
            });
        });
    }

    public requestPermission(permission: string, code: number) {
        this.platform.ready().then(() => {
            cordova.plugins.PermissionProvider.requestPermission(permission, code, (result: string) => {
                return true;
            }, err => {
                return false;
            });
        });
    }

    public getPermission() {
        return this.checkPermissionSubject.asObservable();
    }
}
