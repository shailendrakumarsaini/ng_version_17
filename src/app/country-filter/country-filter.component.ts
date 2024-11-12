import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, map, Observable, startWith, withLatestFrom } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Country } from '../models/team.model';
@Component({
  selector: 'app-country-filter',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './country-filter.component.html',
  styleUrl: './country-filter.component.scss'
})
export class CountryFilterComponent {
  service = inject(ApiService);
  filter :FormControl = new FormControl("");
  countries$ : Observable<Country[]> = this.service.getCountries();

  // filteredCountries$ = this.countries$.pipe(
  //   withLatestFrom(this.filter.valueChanges),
  //   map(([countries, filter]) =>
  //     countries.filter((country) => country.name.includes(filter ?? ''))
  //   )
  // );

  filteredCountries$ = combineLatest([ this.countries$, this.filter.valueChanges.pipe(startWith('')) ]) // Start with an empty string initially
  .pipe(map(([countries, filter]) =>
      countries.filter((country) => country.name.toLowerCase().includes(filter.toLowerCase()))
    )
  );


}
