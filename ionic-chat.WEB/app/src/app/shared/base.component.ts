import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ApplicationRef, Component, OnDestroy, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-base-component',
    template: ``
})

export class BaseComponent implements OnInit, OnDestroy {

    public isKeyboardActive: boolean;

    constructor(public keyboard: Keyboard, public cdr: ApplicationRef, public location: PlatformLocation) {
        keyboard.onKeyboardShow().subscribe(result => {
            this.isKeyboardActive = true;
            cdr.tick();
        });
        keyboard.onKeyboardHide().subscribe(result => {
            this.isKeyboardActive = false;
            cdr.tick();
        });
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }
}
