import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../../services/authentication.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  user$ = this.authService.currentUser$
  valor : number = 0;
  constructor(public authService : AuthenticationService) { }

  ngOnInit(): void {
  }
  increaseValue(){
    this.valor ++
  }
}
