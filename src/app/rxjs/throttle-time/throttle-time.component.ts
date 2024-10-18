import { Component } from '@angular/core';
import { pipe, fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-throttle-time',
  standalone: true,
  imports: [],
  templateUrl: './throttle-time.component.html',
  styleUrl: './throttle-time.component.scss'
})
export class ThrottleTimeComponent {


  constructor(){
    console.clear();
  }
  
  ngOnInit(){
    let element : any = document.getElementById('query');
    fromEvent(element, 'input').pipe(throttleTime(1000)).subscribe((res:any) =>{
      console.log(res['srcElement']['value']);
    });
  }
}
