import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrency } from './currency.interface';

@Injectable({
    providedIn: 'root',
})
export class CurrencyService {
    url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

    constructor(private http: HttpClient) {}

    getCurrencies(): Observable<ICurrency[]> {
        return this.http.get<ICurrency[]>(this.url);
    }
}
