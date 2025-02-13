import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, from } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss'
})
export class ConcatMapComponent {

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    const urls = [
      'https://jsonplaceholder.typicode.com/todos',
      'https://jsonplaceholder.typicode.com/comments',
    ];

    from(urls)
      .pipe(
        concatMap((url) => {
          return this.httpClient.get(url);
        })
      )
      .subscribe((response:any) => {
        console.log(response);
      });
    
  }
}
