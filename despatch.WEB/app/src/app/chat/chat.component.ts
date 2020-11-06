import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController, Platform } from '@ionic/angular';
import { BaseComponent } from '../shared/base.component';
import { UserDto } from '../shared/dto/user.dto';
import { AuthHelper } from '../shared/helpers/auth.helper';
import { MenuHelper } from '../shared/helpers/menu.helper';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent extends BaseComponent implements OnInit {

  public selectedIndex = 0;
  public user: UserDto;
  public navigate: any;

  constructor(
    public keyboard: Keyboard, public AppR: ApplicationRef, public router: Router, public cd: ChangeDetectorRef,
    private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private authHelper: AuthHelper,
    private menuHelper: MenuHelper, public navController: NavController
  ) {
    super(keyboard, AppR, router, cd, navController);
    this.initializeApp();
    this.user = this.authHelper.getUser();
    this.navigate = this.menuHelper.getPages();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname;
    if (path !== undefined) {
      this.selectedIndex = this.navigate.findIndex(page => page.url === path.toLowerCase());
    }
  }
}
