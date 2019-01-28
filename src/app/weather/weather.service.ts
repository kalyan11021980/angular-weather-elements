import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  public timeApiURL = 'http://api.geonames.org/timezoneJSON?formatted=true&';
  public userdetails = '&username=kalyan11021980&style=full'
  // lat=22.57&lng=88.35
  public appID = '&appid=dc9b03f27b6d1b3ef9e1e36680b989ed';
  constructor(
    private _http: HttpClient
  ) {

   }

  getWeather(city, unit): Observable<any> {
     return this._http.get<any>(this.apiURL+city+this.appID+'&units='+unit).pipe(catchError(this.handlError));
  }
  getLocalTime(lat, long): Observable<any> {
     return this._http.get<any>(this.timeApiURL+'lat='+lat+'&lng='+long+this.userdetails);
  }
  handlError(error) {
    return throwError(error.error.message);
  }
}
