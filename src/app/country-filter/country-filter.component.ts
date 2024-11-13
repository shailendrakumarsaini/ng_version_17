import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from '../services/country.service';
import { Country } from '../models/country.model';
import { Observable, combineLatest, startWith, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-country-filter',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './country-filter.component.html',
  styleUrl: './country-filter.component.scss'
})
export class CountryFilterComponent {

  filter: FormControl = new FormControl("");
  countryService = inject(CountryService);
  countries$ : Observable<Country[]> = this.countryService.getCountries();

  filteredCountries$ = combineLatest(this.countries$, this.filter.valueChanges.pipe(startWith(''))).
  pipe(map(([countries, filter])=> countries.filter((country)=> country.name.toLowerCase().includes(filter.toLowerCase()))));

}
