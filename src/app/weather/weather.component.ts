import { Component, Input, OnChanges, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnChanges {
  @Input() location: string;
  @Input() unit: string;
  public errText;
  public weathersubscription;
  public temp: number;
  public desc: string;
  public weatherico: string;
  public country: string;
  public city: string;
  public dt: Date;
  constructor(
    public ws: WeatherService
  ) { }

  renderWeather(): void {
    this.weathersubscription = this.ws.getWeather(this.location, this.unit).subscribe((data) => {
      this.errText = '';
      this.temp = Math.round(data.main.temp);
      this.desc = data.weather[0].description;
      this.weatherico = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
      this.city = data.name;
      this.country = data.sys.country;
      this.getLocalTime(data.coord.lat, data.coord.lon);

    }, error => {
      this.errText = error;
    });
  }

  getLocalTime(lat, long): void {
    this.ws.getLocalTime(lat, long).subscribe((data) => {
      this.dt = data.time;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.location || changes.unit){
      if (this.weathersubscription) {
        this.weathersubscription.unsubscribe();
      }
      this.renderWeather();
    }

  }


}
