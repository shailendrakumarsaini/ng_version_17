import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { ChildLoggerService } from '../../services/child-logger.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  providers:[
    { provide : LoggerService, useClass : ChildLoggerService }
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  constructor(private loggerService :LoggerService){}

  log(){
    this.loggerService.log("Button is clicked");
  }

}
