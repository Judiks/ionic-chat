import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterPhoneComponent } from './components/register/components/register-phone/register-phone.component';
import { RegisterCodeComponent } from './components/register/components/register-code/register-code.component';
import { RegisterLoginComponent } from './components/register/components/register-login/register-login.component';
import { RegisterPasswordComponent } from './components/register/components/register-password/register-password.component';

export let InjectorInstance: Injector;

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    RegisterPhoneComponent,
    RegisterCodeComponent,
    RegisterLoginComponent,
    RegisterPasswordComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
  ]
})
export class AccountModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
 }
