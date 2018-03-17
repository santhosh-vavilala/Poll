import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  goToHomePage() {
    this.navCtrl.push(HomePage);
  }

  goToProfilePage() {
    this.navCtrl.push(ProfilePage);
  }
  goToResultPage()
  {
    this.navCtrl.push(DetailsPage);
  }
}
