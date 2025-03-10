import { Injectable } from '@angular/core';

// @Injectable()
export class ParentLoggerService {

  constructor() { 
    console.log('Parent logger is constructed');
  }

  log(msg:string){
    console.log(`Parent :  ${msg}`);
  }

}
