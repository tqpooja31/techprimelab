import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {
  bussinessform: FormGroup;
  constructor() { }
  ngOnInit() {
    this. bussinessform = new FormGroup(
      {
        pname :new FormControl('', [Validators.required]),
        roots:new FormControl('', [Validators.required]),
        type:new FormControl('', [Validators.required]),
        division:new FormControl('', [Validators.required]),
        category:new FormControl('', [Validators.required]),
        four:new FormControl('', [Validators.required]),
        department:new FormControl('', [Validators.required]),
        start: new FormControl('', [Validators.required]),  
        end: new FormControl('', [Validators.required]),
        location:new FormControl('', [Validators.required]),
        projectNeed:new FormControl('', [Validators.required]),

    });
  }

  onSubmit() {
    console.log('your submitted value:', this.bussinessform.value);
  }
}
