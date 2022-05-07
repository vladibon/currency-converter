import { Component, Input } from '@angular/core';
import { ICurrency } from '../services/currency.interface';

@Component({
    selector: 'app-conversion',
    templateUrl: './conversion.component.html',
    styleUrls: ['./conversion.component.css'],
})
export class ConversionComponent {
    @Input() currencies: ICurrency[] = [];
    @Input() options: string[] = [];

    saleSelectValue: string = '';
    buySelectValue: string = '';
    saleInputValue: number = 0;
    buyInputValue: number = 0;
    rate: number = 1;

    ngOnChanges(): void {
        this.saleSelectValue = this.currencies[0]?.base_ccy;
        this.buySelectValue = this.currencies[0]?.ccy;
        this.rate = Number(this.currencies[0]?.sale);
    }

    onSelectionChange(event: any) {
        this.clearInputs();

        if (event.source.id === 'saleSelect') {
            this.saleSelectValue = event.value;
        }

        if (event.source.id === 'buySelect') {
            this.buySelectValue = event.value;
        }

        if (this.saleSelectValue === this.buySelectValue) this.rate = 1;

        this.currencies.forEach((c) => {
            if (
                this.saleSelectValue !== c.base_ccy &&
                this.buySelectValue !== c.base_ccy &&
                this.saleSelectValue !== this.buySelectValue
            ) {
                if (event.source.id === 'saleSelect') {
                    this.buySelectValue = c.base_ccy;
                }

                if (event.source.id === 'buySelect') {
                    this.saleSelectValue = c.base_ccy;
                }
            }

            if (
                this.saleSelectValue === c.base_ccy &&
                this.buySelectValue === c.ccy
            ) {
                this.rate = Number(c.sale);
            }

            if (
                this.saleSelectValue === c.ccy &&
                this.buySelectValue === c.base_ccy
            ) {
                this.rate = 1 / Number(c.buy);
            }
        });
    }

    onKeyUp(event: any) {
        const { value, name } = event.target;
        const inputValue = Number(value);

        if (Number.isNaN(inputValue)) return;

        if (name === 'saleInput') {
            this.saleInputValue = inputValue;
            this.buyInputValue =
                this.rate > 1
                    ? Math.floor(this.divide(inputValue)) / 100
                    : Math.ceil(this.divide(inputValue)) / 100;
        }

        if (name === 'buyInput') {
            this.buyInputValue = inputValue;
            this.saleInputValue =
                this.rate > 1
                    ? Math.ceil(this.multiply(inputValue)) / 100
                    : Math.floor(this.multiply(inputValue)) / 100;
        }
    }

    clearInputs() {
        this.saleInputValue = 0;
        this.buyInputValue = 0;
    }

    divide(value: number) {
        return (value / this.rate) * 100;
    }

    multiply(value: number) {
        return value * this.rate * 100;
    }
}
