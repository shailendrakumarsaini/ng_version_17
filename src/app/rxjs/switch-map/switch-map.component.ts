import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent implements OnInit {

  searchControl :FormControl = new FormControl();

  fruits : string[] = [];

  loading : boolean = false;

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      switchMap((searchText:string) => this.filter(searchText))
    )
    .subscribe({
      next : (res) =>{
        console.log(res);
        this.fruits = res;
        this.loading = false;
      }
    });
  }

  filter(searchText:string){
    this.loading = true;
    let observableOne = new Observable<string[]>((observer)=>{
      setTimeout(()=>{
        observer.next(['apple', 'pineapple']);
      },5000);
    });
    let observableTwo = new Observable<string[]>((observer)=>{
      setTimeout(()=>{
        observer.next(['mango', 'orange']);
      },5000);
    });

    if(searchText === 'app'){
      return observableOne;
    } else {
      return observableTwo;
    }
  }

}
