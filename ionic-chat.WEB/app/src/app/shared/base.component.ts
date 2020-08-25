import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Component } from '@angular/core';

@Component({
    selector: 'app-base-component',
    template: ``
})

export class BaseComponent {

    public isKeyboardActive: boolean;

    constructor(public keyboard: Keyboard) {
        keyboard.onKeyboardShow().subscribe(result => {
            this.isKeyboardActive = true;
        });
        keyboard.onKeyboardHide().subscribe(result => {
            this.isKeyboardActive = false;
        });
    }
}
