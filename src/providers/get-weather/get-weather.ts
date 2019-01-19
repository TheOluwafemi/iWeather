import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetWeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetWeatherProvider {

  apiKey = "3df3971d074b2783a766bec8160d5ab3";
  URL;


  constructor(public http: HttpClient) {
    console.log('Hello GetWeatherProvider Provider');
    this.URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
  }

  getCurrentWeather (city, country) {
    return this.http.get(this.URL + city + ',' + country + '&appid='+ this.apiKey)
      .map(res => res);
  } 

}