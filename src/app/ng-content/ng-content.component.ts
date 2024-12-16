import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-ng-content',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.scss'
})
export class NgContentComponent {

}
