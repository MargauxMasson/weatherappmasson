import {Component} from 'angular2/core';
import {WeatherListComponent} from './weather/weather-list.component';
import {WeatherSearchComponent} from './weather/weather-search.component';

///////////////////Principal app typescript Document related to index.html/////////////////
@Component({
    selector: 'my-app',
    template: `
        <div class="container-fluid title">
            <div id="header">

                <h1>Weather Forecast Web Application</h1>
                <h3>Current weather & Forecast </h3>

            </div>
        </div>
            <div id="body">
                <weather-search></weather-search>
                <weather-list></weather-list>
            </div>

    `,
    directives:[WeatherListComponent, WeatherSearchComponent]
})
export class AppComponent {
    

}