import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  standalone: true,
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent {

  source = interval(1000); // emits an infinite sequence of ascending integer value every 1 second

  ngOnInit(): void {
    this.source.subscribe({
      next : (res) =>{
        console.log(res);
      }
    });
  }

}
