import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  form!:FormGroup;

  constructor(private fb :FormBuilder){
    this.form = this.fb.group({
      title : ["", [Validators.required]],
      userDetails : this.fb.group({
        name: ["", [Validators.required]],
        age: ["", [Validators.required]],
      }),
      skills : this.fb.array([this.createSkillControl()])
    })

  }

  createSkillControl(): FormControl {
    return this.fb.control("",[Validators.required]);
  }
  addSkill(){
    (this.form.get('skills') as FormArray).push(this.createSkillControl())
  }

  removeSkill(skillIndex: number){
    (this.form.get('skills') as FormArray).removeAt(skillIndex);
  }

  get skillFormArray () {
    return this.form.get('skills') as FormArray;
  }

  onSubmit(){
    console.log(this.form.value);
  }



}
