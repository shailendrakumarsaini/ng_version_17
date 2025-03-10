import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { LoggerService } from '../services/logger.service';
import { ParentLoggerService } from '../services/parent-logger.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  providers:[
    { provide : LoggerService, useClass : ParentLoggerService }
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  
  constructor(private loggerService :LoggerService){}

  log(){
    this.loggerService.log("Button is clicked");
  }
}
