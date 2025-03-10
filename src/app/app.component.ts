import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoggerService } from './services/logger.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private loggerService :LoggerService){}

  log(){
    this.loggerService.log("Button is clicked");
  }


}
