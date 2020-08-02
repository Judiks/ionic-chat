import { Injectable } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Subscription } from 'rxjs';
import { InjectorInstance } from 'src/app/account/account.module';

@Injectable({
    providedIn: 'root'
})

export class KeyboardHelper {

    public static isKeyboardActive = false;
    private static subscriptions: Subscription[] = new Array<Subscription>();

    static BeginListen() {
        const keyboard = InjectorInstance.get<Keyboard>(Keyboard);
        this.subscriptions.push(keyboard.onKeyboardShow().subscribe(result => {
            this.isKeyboardActive = true;
        }));
        this.subscriptions.push(keyboard.onKeyboardHide().subscribe(result => {
            this.isKeyboardActive = false;
        }));
    }

    static EndListener(): void {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }

}
