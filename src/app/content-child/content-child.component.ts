import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-content-child',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.scss'
})
export class ContentChildComponent {

}
