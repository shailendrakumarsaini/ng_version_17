import { Component } from '@angular/core';
import { ChildrenComponent } from './children/children.component';
import { NgContentComponent } from "../ng-content/ng-content.component";

@Component({
  selector: 'app-content-children',
  standalone: true,
  imports: [ChildrenComponent, NgContentComponent],
  templateUrl: './content-children.component.html',
  styleUrl: './content-children.component.scss'
})
export class ContentChildrenComponent {

}
