import { Component } from '@angular/core';
import { fetchCurrency } from '../../api/currencyAPI';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    data = this.fetch();

    async fetch() {
        const data = await fetchCurrency();

        return data;
    }
}
