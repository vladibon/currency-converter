import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './services/currency.service';
import { ICurrency } from './services/currency.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    title = 'currency-converter';
    nationalCurrency = 'UAH';
    currencies: ICurrency[] = [];
    options: string[] = [];

    constructor(private currencyService: CurrencyService) {}

    ngOnInit(): void {
        this.currencyService.getCurrencies().subscribe((data) => {
            this.currencies = data
                .filter((c) => c.base_ccy === this.nationalCurrency)
                .map((c) => {
                    c.buy = Number(c.buy).toFixed(2);
                    c.sale = Number(c.sale).toFixed(2);
                    return c;
                });

            this.options = [
                this.nationalCurrency,
                ...this.currencies.map((c) => c.ccy),
            ];
        });
    }
}
