import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss'
})
export class ForComponent {

  users = [
    { id : 1, name: "john", gender :"male", age: 25 },
    { id : 2, name: "sita", gender :"female", age: 16 },
    { id : 3, name: "kamal", gender :"male", age: 46 },
    { id : 4, name: "rahul", gender :"male", age: 32 },
    { id : 5, name: "sunny", gender :"male", age: 27 }
  ]
}
