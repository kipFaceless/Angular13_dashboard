import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

valor : number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  increaseValue(){
    this.valor ++
  }
}
