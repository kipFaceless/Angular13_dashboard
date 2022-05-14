import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'; // To toggle sidenav
import { AuthenticationService } from './../../services/authentication.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  trigger :any
 // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger ;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav; // For sidenav hide
  user$ = this.authService.currentUser$

  constructor(private observer: BreakpointObserver, private cdr : ChangeDetectorRef, public authService : AuthenticationService) { }
    //Logic for sideNav
    ngAfterViewInit() {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          this.cdr.detectChanges();
        }else{
          this.sidenav.mode = 'side';
          this.sidenav.open();
          this.cdr.detectChanges();
        }
      }

      );
    }

    logout(){
      this.authService.logout()
    }

 /* ngOnInit(): void {
  }  */



}
