import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noSpaceValidator } from '../validators/no-space.validator';
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
      title : ["", [Validators.required, noSpaceValidator()]],
      userDetails : this.fb.group({
        name: ["", [Validators.required]],
        age: ["", [Validators.required]],
      }),
      skills : this.fb.array([this.createSkillControl()])
    });

    this.form.valueChanges.subscribe(changes=>{
      console.log('form valueChanges', changes);
    });

    this.form.controls['title'].valueChanges.subscribe(title=>{
      console.log('title valueChanges', title);
    });

    this.form.controls['skills'].valueChanges.subscribe(skills=>{
      console.log('skills valueChanges', skills);
    });
  }

  get skillFormArray () {
    return this.form.get('skills') as FormArray;
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

  onSubmit(){
    console.log(this.form.value);
  }

  addDesignationCtrl(){
    this.form.addControl('designation', new FormControl("", [Validators.required]));
  }

  removeDesignationCtrl(){
    this.form.removeControl('designation');
  }

}
