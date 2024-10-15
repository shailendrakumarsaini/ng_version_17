import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [],
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss'
})
export class IfComponent {
  showLoading = true;

  user : any = {
    address : {
      city : 'Mathura',
      pincode: 281502
    }
  };

}
