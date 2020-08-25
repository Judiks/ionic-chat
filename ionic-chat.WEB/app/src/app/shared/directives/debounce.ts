import { Directive, OnInit, OnDestroy, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive({
    selector: '[ngModel][appDebounce]',
})
export class DebounceDirective implements OnInit, OnDestroy {
    @Output() public appDebounce = new EventEmitter<any>();
    // tslint:disable-next-line: no-input-rename
    @Input('debounceTime') public debounceTime = 500;

    private subscription: Subscription;

    constructor(public model: NgControl) {
    }

    ngOnInit() {
        this.subscription =
            this.model.valueChanges.pipe(
                debounceTime(this.debounceTime),
                distinctUntilChanged())
                .subscribe(modelValue => {
                    this.appDebounce.emit(modelValue);
                });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
