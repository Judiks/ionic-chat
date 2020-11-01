import { NgModule } from '@angular/core';
import { DebounceDirective } from './directives/debounce.directive';
import { BaseComponent } from './base.component';

@NgModule({
    declarations: [
        DebounceDirective,
        BaseComponent
    ],
    imports: [
    ],
    entryComponents: [
    ],
    exports: [
        DebounceDirective,
    ],
    providers: [
    ]
})
export class SharedModule { }
