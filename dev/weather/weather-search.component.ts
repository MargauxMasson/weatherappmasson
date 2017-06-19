import {Component, Input} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {WeatherService} from "./weather-service";
import{WeatherItem} from "./weather-item";

///////////////////////////Configuration of the Search Bar//////////////////////////////////
   @Component({
            
        selector: "weather-search",
        template: `          

                    <br>
                    <div class="col-md-12 col-sm-12 col-xs-12 search">


                    <!-- On submit : Search the weather where the user wants -->
                        <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                            <!-- Language's choice -->
                            <div class="col-md-1 col-sm-2 col-xs-3 ">
                            <br>
                                <select name="lang" id="lang" class="form-control lang-search">
                                        <option value="en" > English </option>                                    
                                        <option value="fr" > Français </option>
                                        <option value="sp" > Español</option>
                                        <option value="it" > Italiano </option>                                    
                                        <option value="pl" > Polski </option>                                    
                                        <option value="de" > Deutsch </option>
                                        <option value="ru" > Pусский </option>
                                        <option value="zh_cn" > 中文 </option>                                    
                                        <option value="ja" > 日本語 </option>
                                        <option value="ar" > عربى </option>
                                    </select>
                                    <br>
                            </div>

                            <div class="col-md-12 col-sm-12 col-xs-12 ">
                                <!-- Display Cookie : Last City Researched -->
                                <img src="http://openweathermap.org/img/w/01d.png" alt="sun"  onload="cookieLastCity()" hidden>
                                <p class="cookie" id="cookie" > </p>
                                <button type="submit" class="btn btn-info button-search"  onclick="LastCitySearch();LimitSearch()" >Click Here!</button>
                                <br>
                            </div>
                                
                            
                            <!-- City's choice -->
                            <div class="col-md-12 col-sm-12 col-xs-12 ">
                                    <br><br>
                                    <label for="city">City</label>
                                    <input ngControl="location" type="text" name="city" id="city" class="bar-search" onblur="ChooseName(this.value)" placeholder=" Enter the City">
                                    <button type="submit" class="btn btn-info button-search"  onclick="whichcity();LimitSearch()" >Go!</button>

                              <p class="or">  or </p>

                            <!-- Geographical coordinates' choice -->
                                    <label for="lat">Lat</label>
                                    <input ngControl="lat" type="text" id="lat" class="bar-search" placeholder=" Latitude" >
                                    <label for="lon">Lon</label>
                                    <input ngControl="lon" type="text" id="lon" class="bar-search" placeholder=" Longitude" >
                                    <button type="submit" class="btn btn-info button-search" onclick="whichcoordinates();LimitSearch()" >Go!</button>


                                    <br><br>

                            <!-- Button Radio : Choice between metric or imperial system -->
                                    <input type="radio" name="system" id="field1" onclick="SystemFunction(this.value)" value="metric" checked> Metric
                                    <input type="radio" name="system" id="field2" onclick="SystemFunction(this.value)" value="imperial"> Imperial  
                                    <input type="text" id="system" hidden value="metric" >
                                    <input type="text" id="unit" value="C" hidden>
                                    <input type="text" id="which" value="1" hidden>

                            <!-- Code for having current date & forecast dates -->
                                    <input type="text" id="date0" hidden>
                                    <input type="text" id="date1" hidden>
                                    <input type="text" id="date2" hidden>
                                    <input type="text" id="date3" hidden>
                                    <input type="text" id="date4" hidden>
                                    <input type="text" id="date5" hidden>
                                    <input type="text" id="date6" hidden>
                                    
                            </div>
                        </form>
                    </div>
        `
    })


export class WeatherSearchComponent{

    constructor(private _weatherService: WeatherService){
    }
    onSubmit(form:ControlGroup){
    // get the variables from the radio input and the select input (system & language)
    var system = (<HTMLInputElement>document.getElementById("system")).value; 
    var lang = (<HTMLInputElement>document.getElementById("lang")).value;
    var unit = (<HTMLInputElement>document.getElementById("unit")).value;
    var which = (<HTMLInputElement>document.getElementById("which")).value;
    var date0 = (<HTMLInputElement>document.getElementById("date0")).value;
    var date1 = (<HTMLInputElement>document.getElementById("date1")).value;
    var date2 = (<HTMLInputElement>document.getElementById("date2")).value;
    var date3 = (<HTMLInputElement>document.getElementById("date3")).value;
    var date4 = (<HTMLInputElement>document.getElementById("date4")).value;
    var date5 = (<HTMLInputElement>document.getElementById("date5")).value;    
    var date6 = (<HTMLInputElement>document.getElementById("date6")).value;
    form.value.location=(<HTMLInputElement>document.getElementById("city")).value;

    console.log(form);   //we keep the value entered in the search bar


      this._weatherService.searchWeatherData(form.value.location, system,lang, form.value.lat, form.value.lon, which)
            .subscribe(

                data =>{    //we choose the elements from the weather items that we want, here : name, description, temperature, pressure, icon
                            const weatherItem= 
                            new WeatherItem(
                            data.city.name,unit,
                            data.list[0].weather[0].description, data.list[0].temp.day,data.list[0].temp.night, data.list[0].weather[0].icon,date0,
                            data.list[1].weather[0].description, data.list[1].temp.day, data.list[1].temp.night,data.list[1].weather[0].icon,date1,
                            data.list[2].weather[0].description, data.list[2].temp.day, data.list[2].temp.night,data.list[2].weather[0].icon,date2,
                            data.list[3].weather[0].description, data.list[3].temp.day, data.list[3].temp.night,data.list[3].weather[0].icon,date3,
                            data.list[4].weather[0].description, data.list[2].temp.day, data.list[4].temp.night,data.list[4].weather[0].icon,date4,
                            data.list[5].weather[0].description, data.list[2].temp.day, data.list[5].temp.night,data.list[5].weather[0].icon,date5,
                            data.list[6].weather[0].description, data.list[6].temp.day, data.list[6].temp.night,data.list[6].weather[0].icon,date6); 
                            this._weatherService.addWeatherItem(weatherItem);
                }
            );

    }

}