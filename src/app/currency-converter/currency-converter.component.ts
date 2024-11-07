import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {
  resultText: string = '1 USD = 1 USD';
  currencyCodes: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.currencyCodes = [{ name: "USA", code: "USD" }, { name: "EURO", code: "EUR" }, { name: "GBBB", code: "GBP" }, { name: "Japan", code: "JPY" }, { name: "Newzeland", code: "NGN" }]
  }

  convertToRate(amount: any, convertFrom: any, convertTo: any) {
    let result = 0;
    let response = this.apiService.getRates(convertFrom);
    result = parseFloat(response.rates[convertTo].toFixed(2));
    this.resultText = `${amount} ${convertFrom} = ${result} ${convertTo}`;
  }
}
