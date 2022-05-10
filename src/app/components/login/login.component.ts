import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  @Input()
  valor: number = 0;
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success : 'Logged in successfully',
        loading: 'Loading in...',
        error : 'There was an error'
      })
    ).subscribe(()=> {
      this.router.navigate(['/home']);
    })


  }

  logout(){
    this.authService.logout().subscribe(() =>{
      this.router.navigate([''])
    })
  }
  signUp(){
    this.router.navigate(['/signup-page'])
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
