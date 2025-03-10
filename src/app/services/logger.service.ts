import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class LoggerService {

  constructor() { 
    console.log('Root logger is constructed');
  }

  log(msg:string){
    console.log(`Root :  ${msg}`);
  }

}
