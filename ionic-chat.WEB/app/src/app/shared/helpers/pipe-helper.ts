import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
    providedIn: 'root'
})

export class PipeHelper {
    static blurHelper(newValue, oldValue, type) {
        if (newValue === '') {
            switch (type) {
                case (0): {
                    return new Intl.NumberFormat('en-US', { style: 'percent' }).format(oldValue);
                }
                case (1): {
                    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'symbol' })
                    .format(oldValue);
                }
                case (2): {
                    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(oldValue);
                }
            }
        } else {
            return newValue;
        }
    }

    static currencyHelper(value, oldValue): number {
        if (value === '') {
            return Number(oldValue);
        } else {
            return Number(value);
        }
    }

    static calibrationPipeHelper(value, oldValue): number {
        if (value === new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(oldValue)) {
            return oldValue;
        }
        if (value === '') {
            return Number(oldValue);
        } else {
            return Number(value);
        }
    }

    static percentHelper(value, oldValue): number {
        if (value === '') {
            return Number(oldValue) / 100;
        } else {
            return Number(value) / 100;
        }
    }

    static phoneMask(value: string, prevValue: string) {
        let result = '+';
        let letters = '';

        if (value.length < prevValue.length) {
            if (value[value.length] === ' ') {
                return value.slice(value.length - 1, value.length);
            } else {
                return value;
            }
        }
        value = value.replace(/\s/g, '');
        value = value.split('-').join('');
        value = value.split('+').join('');
        if (value.length > 0) {
            result += value.slice(0, 3) + ' ';
            letters = value.slice(3, value.length);
        }
        if (value.length > 4) {
            result += value.slice(3, 5) + ' ';
            letters = value.slice(5, value.length);
        }
        if (value.length > 6) {
            result += value.slice(5, 8) + ' ';
            letters = value.slice(8, value.length);
        }
        if (value.length > 11) {
            result += value.slice(8, 12);
            return result;
        }
        return result + letters;
    }
}
