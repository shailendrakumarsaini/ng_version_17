import { Component } from '@angular/core';
import { from, map } from 'rxjs';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  source = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  constructor() {
    console.clear();
    this.source.pipe(map(value => value * 2)).subscribe(res => {
      console.log(res);
    })
  }
}
