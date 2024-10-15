import { Component } from '@angular/core';
import { pipe, fromEvent, debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  standalone: true,
  imports: [],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.scss'
})
export class DebounceTimeComponent {

  constructor(){
    console.clear();
  }

  ngOnInit(){
    let element : any = document.getElementById('keyword');
    fromEvent(element, 'input').pipe(debounceTime(500)).subscribe((res:any)=>{
      console.log(res['srcElement']['value']);
    })
  }

}
