import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {WeatherItem} from "./weather-item";


//////////////////// Load Data from the api of openweathermap.org : current weather in a city////////////////////////
@Injectable()

export class WeatherService{

    constructor(private _http:Http){}  

    addWeatherItem(weatherItem:WeatherItem){
            WEATHER_ITEMS.push(weatherItem);  //we put the weather's items in the element WEATHER_ITEMS
    }

    getWeatherItems(){
        return WEATHER_ITEMS;
    }


    searchWeatherData(cityName: string,system: string, lang: string,lat: string, lon: string, which: string): Observable<any>{
        //load from the http api adress in case : Enter City

        if(which == "1"){
            return this._http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&APPID=f780207693150a8e276d481edd663161&units='+system+'&cnt=7&lang='+lang+'')
                    .map(response=>response.json())
   
        }

        //load from the http api adress in case : Enter Geographical Coordinates 
        if(which == "2"){
            return this._http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+lon+'&APPID=f780207693150a8e276d481edd663161&units='+system+'&cnt=7&lang='+lang+'')
                    .map(response=>response.json())
   
        }                
    }



}