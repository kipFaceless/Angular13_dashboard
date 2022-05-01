import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'; // To toggle sidenav

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav; // For sidenav hide

  constructor(private observer: BreakpointObserver) { }
    //Logic for sideNav
    ngAfterViewInit() {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        }else{
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }

      );
    }

 /* ngOnInit(): void {
  }  */



}
