
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';

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
    ]
})
export class ChatModule { }
