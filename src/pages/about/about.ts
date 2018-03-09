import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppService} from '../../app/app.service';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public message:string = 'santhosh'
  public options = [];
  constructor(public navCtrl: NavController, appService: AppService) {
    this.message = 'san'
    console.log(appService.msg);
    appService.Options.push({id:1, value:'India'});
    this.options = appService.Options;
  }

}
