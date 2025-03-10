import { Injectable } from '@angular/core';

// @Injectable()
export class ChildLoggerService {

  constructor() { 
    console.log('Child logger is constructed');
  }

  log(msg:string){
    console.log(`Child :  ${msg}`);
  }

}
