import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../auth/auth.service';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
  constructor(public navCtrl: NavController, public auth:AuthService) {


  }

  public logout(){
    this.auth.logout();
    this.navCtrl.push(HomeComponent)
  }




  




}
