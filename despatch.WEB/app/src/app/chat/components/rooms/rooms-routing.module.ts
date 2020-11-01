import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsContactsComponent } from './components/room-contacts/room-contacts.component';
import { RoomCreatingComponent } from './components/room-creating/room-creating.component';
import { RoomsDashboardComponent } from './components/room-dashboard/room-dashboard.component';
import { RoomComponent } from './components/room/room.component';
import { RoomsComponent } from './rooms.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: RoomsComponent,
    children: [
      {
        path: 'dashboard',
        component: RoomsDashboardComponent
      },
      {
        path: 'room',
        component: RoomComponent
      },
      {
        path: 'new',
        component: RoomCreatingComponent
      },
      {
        path: 'contacts',
        component: RoomsContactsComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
