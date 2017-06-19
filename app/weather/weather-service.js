System.register(["angular2/core", "./weather.data", "angular2/http", 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_data_1, http_1;
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_data_1_1) {
                weather_data_1 = weather_data_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            //////////////////// Load Data from the api of openweathermap.org : current weather in a city////////////////////////
            WeatherService = (function () {
                function WeatherService(_http) {
                    this._http = _http;
                }
                WeatherService.prototype.addWeatherItem = function (weatherItem) {
                    weather_data_1.WEATHER_ITEMS.push(weatherItem); //we put the weather's items in the element WEATHER_ITEMS
                };
                WeatherService.prototype.getWeatherItems = function () {
                    return weather_data_1.WEATHER_ITEMS;
                };
                WeatherService.prototype.searchWeatherData = function (cityName, system, lang, lat, lon, which) {
                    //load from the http api adress in case : Enter City
                    if (which == "1") {
                        return this._http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName + '&APPID=f780207693150a8e276d481edd663161&units=' + system + '&cnt=7&lang=' + lang + '')
                            .map(function (response) { return response.json(); });
                    }
                    //load from the http api adress in case : Enter Geographical Coordinates 
                    if (which == "2") {
                        return this._http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&APPID=f780207693150a8e276d481edd663161&units=' + system + '&cnt=7&lang=' + lang + '')
                            .map(function (response) { return response.json(); });
                    }
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBLHFIQUFxSDtZQUdySDtnQkFFSSx3QkFBb0IsS0FBVTtvQkFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO2dCQUFFLENBQUM7Z0JBRWpDLHVDQUFjLEdBQWQsVUFBZSxXQUF1QjtvQkFDOUIsNEJBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBRSx5REFBeUQ7Z0JBQ25HLENBQUM7Z0JBRUQsd0NBQWUsR0FBZjtvQkFDSSxNQUFNLENBQUMsNEJBQWEsQ0FBQztnQkFDekIsQ0FBQztnQkFHRCwwQ0FBaUIsR0FBakIsVUFBa0IsUUFBZ0IsRUFBQyxNQUFjLEVBQUUsSUFBWSxFQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYTtvQkFDbkcsb0RBQW9EO29CQUVwRCxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQzt3QkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMERBQTBELEdBQUMsUUFBUSxHQUFDLGdEQUFnRCxHQUFDLE1BQU0sR0FBQyxjQUFjLEdBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQzs2QkFDaEssR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFFLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFBO29CQUUzQyxDQUFDO29CQUVELHlFQUF5RTtvQkFDekUsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFBLENBQUM7d0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDREQUE0RCxHQUFDLEdBQUcsR0FBQyxPQUFPLEdBQUMsR0FBRyxHQUFDLGdEQUFnRCxHQUFDLE1BQU0sR0FBQyxjQUFjLEdBQUMsSUFBSSxHQUFDLEVBQUUsQ0FBQzs2QkFDekssR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFFLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFBO29CQUUzQyxDQUFDO2dCQUNMLENBQUM7Z0JBOUJMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQWtDYixxQkFBQztZQUFELENBaENBLEFBZ0NDLElBQUE7WUFoQ0QsMkNBZ0NDLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1dFQVRIRVJfSVRFTVN9IGZyb20gXCIuL3dlYXRoZXIuZGF0YVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8gTG9hZCBEYXRhIGZyb20gdGhlIGFwaSBvZiBvcGVud2VhdGhlcm1hcC5vcmcgOiBjdXJyZW50IHdlYXRoZXIgaW4gYSBjaXR5Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZXtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCl7fSAgXG5cbiAgICBhZGRXZWF0aGVySXRlbSh3ZWF0aGVySXRlbTpXZWF0aGVySXRlbSl7XG4gICAgICAgICAgICBXRUFUSEVSX0lURU1TLnB1c2god2VhdGhlckl0ZW0pOyAgLy93ZSBwdXQgdGhlIHdlYXRoZXIncyBpdGVtcyBpbiB0aGUgZWxlbWVudCBXRUFUSEVSX0lURU1TXG4gICAgfVxuXG4gICAgZ2V0V2VhdGhlckl0ZW1zKCl7XG4gICAgICAgIHJldHVybiBXRUFUSEVSX0lURU1TO1xuICAgIH1cblxuXG4gICAgc2VhcmNoV2VhdGhlckRhdGEoY2l0eU5hbWU6IHN0cmluZyxzeXN0ZW06IHN0cmluZywgbGFuZzogc3RyaW5nLGxhdDogc3RyaW5nLCBsb246IHN0cmluZywgd2hpY2g6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PntcbiAgICAgICAgLy9sb2FkIGZyb20gdGhlIGh0dHAgYXBpIGFkcmVzcyBpbiBjYXNlIDogRW50ZXIgQ2l0eVxuXG4gICAgICAgIGlmKHdoaWNoID09IFwiMVwiKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3QvZGFpbHk/cT0nK2NpdHlOYW1lKycmQVBQSUQ9Zjc4MDIwNzY5MzE1MGE4ZTI3NmQ0ODFlZGQ2NjMxNjEmdW5pdHM9JytzeXN0ZW0rJyZjbnQ9NyZsYW5nPScrbGFuZysnJylcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZT0+cmVzcG9uc2UuanNvbigpKVxuICAgXG4gICAgICAgIH1cblxuICAgICAgICAvL2xvYWQgZnJvbSB0aGUgaHR0cCBhcGkgYWRyZXNzIGluIGNhc2UgOiBFbnRlciBHZW9ncmFwaGljYWwgQ29vcmRpbmF0ZXMgXG4gICAgICAgIGlmKHdoaWNoID09IFwiMlwiKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3QvZGFpbHk/bGF0PScrbGF0KycmbG9uPScrbG9uKycmQVBQSUQ9Zjc4MDIwNzY5MzE1MGE4ZTI3NmQ0ODFlZGQ2NjMxNjEmdW5pdHM9JytzeXN0ZW0rJyZjbnQ9NyZsYW5nPScrbGFuZysnJylcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZT0+cmVzcG9uc2UuanNvbigpKVxuICAgXG4gICAgICAgIH0gICAgICAgICAgICAgICAgXG4gICAgfVxuXG5cblxufSJdfQ==
