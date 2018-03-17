import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppService } from '../../app/app.service';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public message: string = 'santhosh'
  public options = [];
  optionText;
  appService;
  selectedTypeValue;
  constructor(public navCtrl: NavController, appService: AppService) {
    this.message = 'san'
    console.log(appService.msg);
    this.appService = appService;
    this.selectedTypeValue = 'default'
  }

  public addItems(optionText) {
    if (optionText != '' && optionText != undefined) {
      this.appService.Options.push({ id: 1, value: optionText });
      this.options = this.appService.Options;
      this.optionText = ''; 
    }
  }

}
