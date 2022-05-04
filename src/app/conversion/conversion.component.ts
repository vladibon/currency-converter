import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-conversion',
    templateUrl: './conversion.component.html',
    styleUrls: ['./conversion.component.css'],
})
export class ConversionComponent {
    @Input() currencies: any = [];
}
