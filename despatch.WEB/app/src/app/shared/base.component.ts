import { ApplicationRef, ChangeDetectorRef, Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-base-component',
    template: ``
})

export class BaseComponent {

    public colors: string[];
    public isKeyboardActive = false;
    private window: any = window;

    constructor(
        public keyboard: Keyboard, public cdr: ApplicationRef,
        public router: Router, public navController: NavController
    ) {
        this.colors = new Array<string>();
        keyboard.onKeyboardShow().subscribe(result => {
            this.isKeyboardActive = true;
            cdr.tick();
        });
        keyboard.onKeyboardHide().subscribe(result => {
            this.isKeyboardActive = false;
            cdr.tick();
        });
        document.addEventListener('ionBackButton', (ev) => {
            this.navController.pop();
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
    // ------------- ROOM -------------
    // redirect to rooms list
    public redirectToRooms() {
        this.router.navigate(['chat', 'rooms', 'dashboard']);
    }
    // redirect to create room
    public redirectToCreateRoom() {
        this.router.navigate(['chat', 'rooms', 'new']);
    }
    // redirect to create room
    public redirectToRoom() {
        this.router.navigate(['chat', 'rooms', 'room']);
    }
    // redirect to room-contacts list
    public redirectToRoomContacts() {
        this.router.navigate(['chat', 'rooms', 'contacts']);
    }

    // ------------- CONTACTS -------------
    public redirectToContacts() {
        this.router.navigate(['chat', 'contacts', 'dashboard']);
    }

    public getRandomColor(): string {
        const colors = ['#3880ff', '#3171e0', '#4c8dff', '#3dc2ff', '#36abe0', '#50c8ff', '#5260ff', '#4854e0', '#6370ff'];
        const random = Math.floor(Math.random() * 9);
        return colors[random];
    }

    sanitizeImage(value) {
        if (!value) {
            return;
        }
        const result = this.window.Ionic.WebView.convertFileSrc(value);
        return result;
    }
}
