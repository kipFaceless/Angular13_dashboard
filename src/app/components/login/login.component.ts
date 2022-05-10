
import { Component, Input, OnInit,  NgModule  } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  })

  @Input()
  valor : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
