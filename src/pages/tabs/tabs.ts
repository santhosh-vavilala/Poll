import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SearchPage } from '../search/search';
import { ProfilePage } from '../profile/profile';
import { NavController } from 'ionic-angular';
import { HomeComponent } from '../../home/home.component';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = SearchPage;

  constructor(public navCtrl: NavController) {
    navCtrl.push(HomeComponent)
  }
}
