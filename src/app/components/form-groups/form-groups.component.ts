import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-groups',
  templateUrl: './form-groups.component.html',
  styleUrls: ['./form-groups.component.scss']
})
export class FormGroupsComponent implements OnInit {
  animal = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    favoritFood: new FormControl('')
  });

  animalGroup(){
    console.log(this.animal.value)
  }


  constructor() { }

  ngOnInit(): void {
  }
}
