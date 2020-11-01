import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsDashboardComponent } from './components/room-dashboard/room-dashboard.component';
import { RoomComponent } from './components/room/room.component';
import { IonicModule } from '@ionic/angular';
import { RoomsContactsComponent } from './components/room-contacts/room-contacts.component';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomComponent,
    RoomsDashboardComponent,
    RoomsContactsComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
