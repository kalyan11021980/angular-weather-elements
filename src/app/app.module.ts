import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherComponent } from './weather/weather.component';
import {createCustomElement} from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [WeatherComponent]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
  }

  // tslint:disable-next-line:typedef
  ngDoBootstrap() {
    const weathercomponent = createCustomElement(WeatherComponent, {injector: this.injector});
    customElements.define('app-weather', weathercomponent);
  }
}
