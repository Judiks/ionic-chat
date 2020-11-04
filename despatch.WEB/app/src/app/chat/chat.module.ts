import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { Contacts } from '@ionic-native/contacts/ngx';
import { ContactDashboardComponent } from './components/contacts/components/contact-dashboard/contact-dashboard.component';
import { RoomsDashboardComponent } from './components/rooms/components/room-dashboard/room-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        ChatComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        ChatRoutingModule,
    ],
    providers: [
        Contacts
    ]
})
export class ChatModule { }
