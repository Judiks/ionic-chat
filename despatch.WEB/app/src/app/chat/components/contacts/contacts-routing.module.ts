import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDashboardComponent } from './components/contact-dashboard/contact-dashboard.component';
import { ContactsComponent } from './contacts.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: 'dashboard',
        component: ContactDashboardComponent
      },
      // {
      //   path: 'new',
      //   component: RoomCreatingComponent
      // },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
