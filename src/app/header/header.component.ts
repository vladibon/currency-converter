import { Component, Input } from '@angular/core';
import { Currency } from '../services/currency.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    @Input() currencies: Currency[] = [];
}
