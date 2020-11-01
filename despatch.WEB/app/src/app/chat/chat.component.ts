import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BaseComponent } from '../shared/base.component';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AuthHelper } from '../shared/helpers/auth.helper';
import { UserDto } from '../shared/dto/user.dto';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent extends BaseComponent implements OnInit {

  public selectedIndex = 0;
  public user: UserDto;
  public appPages = [
    {
      title: 'Rooms',
      url: '/room-register',
      icon: 'mail'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    public keyboard: Keyboard, public AppR: ApplicationRef, public router: Router, public cd: ChangeDetectorRef,
    private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private authHelper: AuthHelper
  ) {
    super(keyboard, AppR, router, cd);
    this.initializeApp();
    this.user = this.authHelper.getUser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
