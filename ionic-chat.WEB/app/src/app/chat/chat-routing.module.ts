import { ChatComponent } from './chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'room-register',
        pathMatch: 'full',
    },
    {
        path: '',
        component: ChatComponent,
        children: [
            {
                path: 'room-register',
                loadChildren: () => import('./components/room-register/room-register.module').then(m => m.RoomRegisterModule)
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
