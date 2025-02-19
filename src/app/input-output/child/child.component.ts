import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input('data') data!:string;
  @Output() updateData : EventEmitter<string> = new EventEmitter<string>();

  update(){
    this.updateData.emit("Hello");
  }

}
