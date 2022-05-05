import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from './currency.interface';

@Injectable({
    providedIn: 'root',
})
export class CurrencyService {
    url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

    constructor(private http: HttpClient) {}

    getCurrencies(): Observable<Currency[]> {
        return this.http.get<Currency[]>(this.url);
    }
}
