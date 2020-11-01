import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastsHelper {

    constructor(public toast: ToastController) {

    }

    public async error(message: string) {
        const toast = await this.toast.create({
            message,
            duration: 2000,
            color: 'danger'
        });
        toast.present();
    }

    public async success(message: string) {
        const toast = await this.toast.create({
            message,
            duration: 2000,
            color: 'success'
        });
        toast.present();
    }
}
