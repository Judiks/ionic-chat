import { ChatComponent } from './chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'rooms',
        pathMatch: 'full',
    },
    {
        path: '',
        component: ChatComponent,
        children: [
            {
                path: 'rooms',
                loadChildren: () => import('./components/rooms/rooms.module').then(m => m.RoomsModule)
            },
            {
                path: 'contacts',
                loadChildren: () => import('./components/contacts/contacts.module').then(m => m.ContactsModule)
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ChatRoutingModule { }
