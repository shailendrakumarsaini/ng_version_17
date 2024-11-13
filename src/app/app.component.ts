import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountryFilterComponent } from './country-filter/country-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CountryFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  constructor(){}


  ngOnInit(): void {}


}
