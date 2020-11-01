import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Contacts } from '@ionic-native/contacts/ngx';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [

  ],
  imports: [
    Contacts,
    CommonModule,
    IonicModule.forRoot(),
  ]
})
export class ContactsModule { }
