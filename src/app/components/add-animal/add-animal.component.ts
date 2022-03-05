import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {
  name = new FormControl('');
  
  changeName(){
    this.name.setValue("Mikaela");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
