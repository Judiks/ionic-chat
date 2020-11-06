import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactDashboardComponent } from './components/contact-dashboard/contact-dashboard.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactDashboardComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ContactsRoutingModule
  ],
  providers: [
  ]
})
export class ContactsModule { }
