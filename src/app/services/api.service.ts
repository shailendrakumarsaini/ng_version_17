import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getRates(base: string): any {

    // return this.httpClient.get(

    //   `https://api.apilayer.com/exchangerates_data/latest?apikey=hZqc0Gi4IrO3TFroyu46FDIe1Rh2CQgi&base=${base}&symbols=USD%2CEUR%2CJPY%2CGBP%2CNGN&base=USD`

    // );

    return {
      "base": "INR",
      "date": "2024-09-03",
      "rates": {
        "USD": 0.011911,
        "EUR": 0.010789,
        "JPY": 1.737161,
        "GBP": 0.009081,
        "NGN": 18.94299
      }

    }

  }
}
