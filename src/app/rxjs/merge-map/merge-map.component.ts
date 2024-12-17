import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss'
})
export class MergeMapComponent implements OnInit {

  searchControl : FormControl  = new FormControl();

  fruits : string[] = [];

  loading :boolean = false;

  ngOnInit(){
    this.searchControl.valueChanges.pipe(
      mergeMap((searchText:string) => this.filter(searchText) ),
    ).subscribe(
      {
        next: (res: string[]) => {
          console.log(res)
          this.fruits = res;
          this.loading = false;
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    
      }
    );
  }

  filter(searchText: string) {
    this.loading = true;
    const observableOne = new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(['apple', 'pineapple']);
      }, 5000);
    });
    const observableTwo = new Observable<string[]>((observer) => {
      setTimeout(() => {
        observer.next(['mango', 'orange']);
      }, 5000);
    });

    if (searchText === 'app') {
      return observableOne;
    } else {
      return observableTwo;
    }
  }

}
