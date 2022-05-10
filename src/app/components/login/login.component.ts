
import { Component, Input, OnInit,  NgModule  } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required]),
  })

  @Input()
  valor : number = 0;
  constructor() { }

  ngOnInit(): void {
  }



  get email () {
    return this.loginForm.get('email');
  }

  get password () {
    return this.loginForm.get('password');
  }


}
