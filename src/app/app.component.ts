import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppService } from './app.service';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../auth/auth.service';
import { HomeComponent } from '../home/home.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomeComponent;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, appService: AppService, public auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    console.log('from app component1')
    //auth.handleAuthentication();
    console.log('from app component2')
  }
}
