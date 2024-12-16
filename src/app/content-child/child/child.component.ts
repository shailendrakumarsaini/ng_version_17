import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-content-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @ContentChild('childReff') childRef?: ElementRef;

  ngAfterViewInit(): void {
    console.log('Focus on input once View Init');
    this.childRef?.nativeElement.focus();
  }
}
