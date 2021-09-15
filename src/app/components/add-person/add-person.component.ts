import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  person = new FormGroup({
    name : new FormControl(''),
    father : new FormControl(''),
    grand : new FormControl(''),
    village : new FormControl(''),
    tola : new FormControl(''),
    city : new FormControl(''),
    occupation : new FormControl(''),
    designation : new FormControl(''),
    phone : new FormControl(''),
    // photo : new FormControl(''),
  })


  constructor() { }

  ngOnInit(): void {
  }

  addPerson() {
    alert('Person will be added in our record ');
  }

  onSubmit(){
    console.warn(this.person.value);
  }
}
