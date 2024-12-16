import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent implements AfterViewInit {

  @ViewChild('inputRef') inputRef?: ElementRef;

  ngAfterViewInit(): void {
    console.log('Focus on input once View Init');
    this.inputRef?.nativeElement.focus();
  }


}
