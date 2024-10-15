import { Component } from '@angular/core';
import { pipe, filter, from } from 'rxjs';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  source = from([1, 2, 3, 4, 5, 6, 7, 8, 9])

  constructor() {
    console.clear();
    this.source.pipe(filter(value => value % 2 == 0)).subscribe(res => {
      console.log(res);
    })
  }
}
