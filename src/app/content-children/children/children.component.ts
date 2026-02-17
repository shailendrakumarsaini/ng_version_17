import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [],
  templateUrl: './children.component.html',
  styleUrl: './children.component.scss'
})
export class ChildrenComponent {
 @ContentChildren('liRef') liRef? : QueryList<ElementRef>;


 ngAfterContentInit(): void {
  console.log('Add * to all li elements once Content Init');
  console.log('liRef', this.liRef);
  this.liRef?.forEach((e: ElementRef) => {
    const el = e.nativeElement as HTMLElement;
    // Add a star at the beginning of each li element's content
    el.innerHTML = `* ${el.innerHTML}`;
    // Add a CSS class for styling
    el.classList.add('starred-li');
    // Change text color
    el.style.color = 'blue';
    // Set font weight to bold
    el.style.fontWeight = 'bold';
    // Add a tooltip
    el.title = 'Starred item';
  });
 }
}
