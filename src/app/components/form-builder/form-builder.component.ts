import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  animals = this.fb.group({
    names:[''],
    types:[''],
    favoritFoods:['', Validators.required],
    nickNames: this.fb.array([this.fb.control('')])
  });
  constructor(private fb: FormBuilder) { }
  
  get nickNames(): FormArray{
    return this.animals.get('nickNames') as FormArray;
  }
  addNickname(){
    this.nickNames.push(this.fb.control(''));
  }

  ngOnInit(): void {
  }



}
