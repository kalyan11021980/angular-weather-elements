import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
// import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { createCustomElement} from '@angular/elements';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    // AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  entryComponents: [WeatherComponent]
})
export class AppModule { 
  constructor(
    private injector: Injector
  ){

  }

  ngDoBootstrap(){
    const weathercomponent = createCustomElement(WeatherComponent, {injector: this.injector});
    customElements.define('app-weather', weathercomponent);
  }

}
