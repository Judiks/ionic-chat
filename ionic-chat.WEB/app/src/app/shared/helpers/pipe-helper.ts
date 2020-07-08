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
        let result = '';
        let letters = '';

        if (value.length < prevValue.length) {
            if (value[value.length] === '-' || value[value.length] === ' ') {
                return value.slice(value.length - 1, value.length);
            } else {
                return value;
            }
        }
        value = value.replace(/\s/g, '');
        value = value.split('-').join('');
        if (value.length > 0) {
            result += value.slice(0, 1) + ' ';
            letters = value.slice(1, value.length);
        }
        if (value.length > 3) {
            result += value.slice(1, 4) + ' ';
            letters = value.slice(4, value.length);
        }
        if (value.length > 6) {
            result += value.slice(4, 7) + '-';
            letters = value.slice(7, value.length);
        }
        if (value.length > 8) {
            result += value.slice(7, 9) + '-';
            letters = value.slice(9, value.length);
        }
        if (value.length > 10) {
            result += value.slice(9, 11);
            return result;
        }
        return result + letters;
    }
}
