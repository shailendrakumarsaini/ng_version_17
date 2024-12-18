import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  role : string  = 'user'
  constructor() { }

  getRole(){
    return this.role;
  }
}
