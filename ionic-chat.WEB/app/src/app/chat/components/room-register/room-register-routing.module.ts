import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomContactsComponent } from './components/room-contacts/room-contacts.component';
import { RoomCreatingComponent } from './components/room-creating/room-creating.component';
import { RoomDashboardComponent } from './components/room-dashboard/room-dashboard.component';
import { RoomComponent } from './components/room/room.component';
import { RoomRegisterComponent } from './room-register.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'room-dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: RoomRegisterComponent,
    children: [
      {
        path: 'room-dashboard',
        component: RoomDashboardComponent
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
        component: RoomContactsComponent
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
export class RoomRegisterRoutingModule { }
