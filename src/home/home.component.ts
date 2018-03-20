import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService,public navCtrl: NavController) {
    console.log('from home component1')
    if(auth.isAuthenticated())
    {
      this.navCtrl.push(TabsPage);
    }
    else
    {
      this.handleAuthentication();
    }
    console.log('from home component2')
   }

  ngOnInit() {
  }

  public handleAuthentication(): void {
    this.auth.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.auth.setSession(authResult);
        this.navCtrl.push(TabsPage);
      } else if (err) {
      }
    });
  }

}
