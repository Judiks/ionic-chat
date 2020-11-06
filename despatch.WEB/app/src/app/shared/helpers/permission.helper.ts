import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subject, Subscriber } from 'rxjs';
import { PermissionDto } from '../dto/permission.dto';

declare let cordova: any;

@Injectable({
    providedIn: 'root'
})
export class PermissionHelper {

    private checkPermissionSubject = new Subject<PermissionDto>();
    private requestQueue: string[] = [];
    private requests: Subscriber<any>[] = [];

    constructor(private platform: Platform) {
        this.getPermission().subscribe((result: PermissionDto) => {
            if (!result.isActive) {
              this.addRequestToQueue(result);
            }
            this.checkRequestsCount();
          });
    }

    private addRequestToQueue(model: PermissionDto) {
        this.requestQueue.push(model.permission);
    }

    private checkRequestsCount() {
        if (this.requests.length > 0) {
            this.requests.shift();
        }
        if (this.requests.length === 0) {
            this.requestPermission(this.requestQueue, Math.random() * 100);
        }
    }

    public checkPermissionMethod(permission: string) {
        this.platform.ready().then(() => {
            this.requests.push(
                cordova.plugins.PermissionProvider.checkPermission(permission, (result: string) => {
                    this.checkPermissionSubject.next(new PermissionDto(true, permission));
                },
                    (err) => {
                        this.checkPermissionSubject.next(new PermissionDto(false, permission));
                    })
            );
        });
    }

    private requestPermission(permissions: string[], code: number) {
        this.platform.ready().then(() => {
            cordova.plugins.PermissionProvider.requestPermission(permissions, code, (result: string) => {
                console.log('Permission request was sended');
            },
                (err) => {
                    console.log('Something went wrong');
                });
        });
    }

    public getPermission() {
        return this.checkPermissionSubject.asObservable();
    }
}
