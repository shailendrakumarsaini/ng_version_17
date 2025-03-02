import { Component, Optional } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.scss'
})
export class ChildTwoComponent {
  constructor(@Optional() private controlContainer: ControlContainer) {
    console.log('Parent NgForm:', this.controlContainer?.control);
  }
}
