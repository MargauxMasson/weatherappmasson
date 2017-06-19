import {Component, Input    } from 'angular2/core';
import{WeatherItem} from './weather-item';


@Component({

    selector:'weather-item',
    template: `
    <!-- Display the current weather and, below, the 6 days forecast -->
    <!-- TODAY -->
    <article id="articleweather" class="col-md-4 col-sm-4 white card " > 
        <div class="row search" >
                <div class="col-md-12 col-sm-12 card-today" >
                    <h3>{{weatherItem.cityName}}</h3>
                    <h4>{{weatherItem.date0}}</h4>
                    <p class="info">{{weatherItem.description0}}</p>
                    <img src="http://openweathermap.org/img/w/{{weatherItem.icon0}}.png" class="icon" alt="weather" >
                    Day: {{weatherItem.temperature0}} °{{weatherItem.unit}}
                    Night: {{weatherItem.night0}} °{{weatherItem.unit}}

                </div>
        </div>

        <!-- FORECAST -->
        <div align="center">
                <!-- TOMORROW -->
                <div class="col-md-2 col-sm-2 col-xs-2 card-forecast">
                                <p class="forecastdate"> {{weatherItem.date1}}</p>
                                <p> {{weatherItem.description1}} </p>
                                <img src="http://openweathermap.org/img/w/{{weatherItem.icon1}}.png" alt="weather" >
                                Day
                                <p>{{weatherItem.temperature1}} °{{weatherItem.unit}}</p>
                                Night
                                <p>{{weatherItem.night1}} °{{weatherItem.unit}}</p>

                </div>
                
                <!-- 2 days after -->        
                <div class="col-md-2 col-sm-2 col-xs-2 card-forecast">
                        <p class="forecastdate"> {{weatherItem.date2}}</p>
                        <p> {{weatherItem.description2}} </p>
                        <img src="http://openweathermap.org/img/w/{{weatherItem.icon2}}.png" alt="weather">
                        <br> Day
                        <p>{{weatherItem.temperature2}} °{{weatherItem.unit}}</p>
                        Night
                        <p>{{weatherItem.night2}} °{{weatherItem.unit}}</p>
                </div>

                <!-- 3 days after -->
                <div class="col-md-2 col-sm-2 col-xs-2 card-forecast">
                        <p class="forecastdate"> {{weatherItem.date3}}</p>
                        <p> {{weatherItem.description3}} </p>
                        <img src="http://openweathermap.org/img/w/{{weatherItem.icon3}}.png" alt="weather">
                        <br> Day
                        <p>{{weatherItem.temperature3}} °{{weatherItem.unit}}</p>   
                        Night
                        <p>{{weatherItem.night3}} °{{weatherItem.unit}}</p>
                </div>

                <!-- 4 days after -->
                <div class="col-md-2 col-sm-2 col-xs-2 card-forecast">
                        <p class="forecastdate"> {{weatherItem.date4}}</p>
                        <p> {{weatherItem.description4}} </p>
                        <img src="http://openweathermap.org/img/w/{{weatherItem.icon4}}.png" alt="weather">
                        <br> Day
                        <p>{{weatherItem.temperature4}} °{{weatherItem.unit}}</p>                                
                        Night
                        <p>{{weatherItem.night4}} °{{weatherItem.unit}}</p>
                </div>

                <!-- 5 days after -->
                <div class="col-md-2 col-sm-2 col-xs-2 card-forecast">
                        <p class="forecastdate"> {{weatherItem.date5}}</p>
                        <p> {{weatherItem.description5}} </p>
                        <img src="http://openweathermap.org/img/w/{{weatherItem.icon5}}.png" alt="weather">
                        <br> Day
                        <p>{{weatherItem.temperature5}} °{{weatherItem.unit}}</p>                        
                        Night
                        <p>{{weatherItem.night5}} °{{weatherItem.unit}}</p>
                </div>

                <!-- 6 days after -->
                <div class="col-md-2 col-sm-2 col-xs-2 card-forecast">
                        <p class="forecastdate"> {{weatherItem.date6}}</p>
                        <p> {{weatherItem.description6}} </p>
                        <img src="http://openweathermap.org/img/w/{{weatherItem.icon6}}.png" alt="weather">
                        <br> Day
                        <p>{{weatherItem.temperature6}} °{{weatherItem.unit}}</p>
                        Night
                        <p>{{weatherItem.night6}} °{{weatherItem.unit}}</p>
                </div>

        </div>
</article> 
`,
})

export class WeatherItemComponent {
   @Input('item') weatherItem: WeatherItem; 
   

}