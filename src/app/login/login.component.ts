import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  email:String;
  password:String;

  form: FormGroup;
  constructor(private r:Router) { }
  ngOnInit() {
    this.form = new FormGroup(
      {

     email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required])
    });
  }
  
  onSubmit()
  {
    if(this.email == "admin@gmail.com" && this.password == "admin@123")
    {
                alert("login successfully");
                this.r.navigate(['/side']);
    }
    else
    {
               alert("login  not successfully");
    }
  }
}


