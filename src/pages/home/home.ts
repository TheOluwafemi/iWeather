import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetWeatherProvider } from '../../providers/get-weather/get-weather';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  location: {
    city: string;
    country: string;
  }

  constructor(
    public navCtrl: NavController, 
    private getWeatherService: GetWeatherProvider, 
    private storage: Storage ) {

  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'London',
          country: 'uk'
        }
      }
    
      this.getWeatherService.getCurrentWeather(this.location.city, this.location.country).subscribe(weather => {
          // console.log(weather);
          this.weather = weather; 
      });
    });
  }

}
  