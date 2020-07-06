import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { IonicModule } from '@ionic/angular';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AccountRoutingModule,
  ],
  providers: [
    Keyboard,
  ]
})
export class AccountModule { }
