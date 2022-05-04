import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Currency } from './currency.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'currency-converter';
    currencies: Currency[] = [];

    constructor(private currencyService: CurrencyService) {}

    ngOnInit(): void {
        this.currencyService.getCurrencies().subscribe((data) => {
            this.currencies = data.filter((c) => c.base_ccy === 'UAH');
        });
    }
}
