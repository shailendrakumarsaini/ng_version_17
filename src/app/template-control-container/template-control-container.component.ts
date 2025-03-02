import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';

@Component({
  selector: 'app-template-control-container',
  standalone: true,
  imports: [FormsModule, ChildOneComponent, ChildTwoComponent],
  templateUrl: './template-control-container.component.html',
  styleUrl: './template-control-container.component.scss'
})
export class TemplateControlContainerComponent {
  @ViewChild('myForm', { static: true }) myForm!: NgForm;

  submitForm() {
    console.log(this.myForm.value);
  }
}
