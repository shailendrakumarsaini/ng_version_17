import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  role : string  = 'admin'
  constructor() { }

  getRole(){
    return this.role;
  }

  getId() : Observable<User> | Promise<User> | User {
    return new Observable((observer) => {
      setTimeout(()=>{
        observer.next({ name: 'sunny', age: 27, gender: 'male', mobile: 7078276728 });
        observer.complete();
      }, 3000)
    });
  }
}
