import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children',
  standalone: true,
  imports: [],
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.scss'
})
export class ViewChildrenComponent implements AfterViewInit{
  @ViewChildren('liRef') liRef?: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    console.log('Add # to all li elements once View Init');
    this.liRef?.map((e)=>{
      e.nativeElement.innerHTML = `# ${e.nativeElement.innerHTML}`;
    })
  }
}
