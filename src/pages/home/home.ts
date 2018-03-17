import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

  goToResultPage()
  {
    this.navCtrl.push(DetailsPage);
  }

}
