import { ApplicationRef, ChangeDetectorRef, Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
    selector: 'app-base-component',
    template: ``
})

export class BaseComponent{

    public isKeyboardActive = false;

    constructor(
        public keyboard: Keyboard, public cdr: ApplicationRef,
        public router: Router, public cd: ChangeDetectorRef
    ) {
        this.router.events.subscribe(e => e instanceof NavigationEnd && this.refresh());
        keyboard.onKeyboardShow().subscribe(result => {
            this.isKeyboardActive = true;
            cdr.tick();
        });
        keyboard.onKeyboardHide().subscribe(result => {
            this.isKeyboardActive = false;
            cdr.tick();
        });
    }
    // ------------- ACCOUNT -------------
    // redirect to register page
    public redirectToRegister() {
        this.router.navigate(['account', 'register']);
    }
    // redirect to login page
    public redirectToLogin() {
        this.router.navigate(['account', 'login']);
    }

    // ------------- CHAT -------------
    // redirect to rooms list
    public redirectToRooms() {
        this.router.navigate(['chat', 'rooms', 'dashboard']);
    }
    // refresh HTML directives
    public refresh() {
        this.cd.detectChanges();
    }
}
