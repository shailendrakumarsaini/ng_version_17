import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  role : string  = 'admin'
  constructor() { }

  getRole(){
    return this.role;
  }
}
