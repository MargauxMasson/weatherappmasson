System.register(['angular2/core', './weather/weather-list.component', './weather/weather-search.component'], function(exports_1, context_1) {
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
    var core_1, weather_list_component_1, weather_search_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_list_component_1_1) {
                weather_list_component_1 = weather_list_component_1_1;
            },
            function (weather_search_component_1_1) {
                weather_search_component_1 = weather_search_component_1_1;
            }],
        execute: function() {
            ///////////////////Principal app typescript Document related to index.html/////////////////
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div class=\"container-fluid title\">\n            <div id=\"header\">\n\n                <h1>Weather Forecast Web Application</h1>\n                <h3>Current weather & Forecast </h3>\n\n            </div>\n        </div>\n            <div id=\"body\">\n                <weather-search></weather-search>\n                <weather-list></weather-list>\n            </div>\n\n    ",
                        directives: [weather_list_component_1.WeatherListComponent, weather_search_component_1.WeatherSearchComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQSwyRkFBMkY7WUFvQjNGO2dCQUFBO2dCQUdBLENBQUM7Z0JBdEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSx3WUFjVDt3QkFDRCxVQUFVLEVBQUMsQ0FBQyw2Q0FBb0IsRUFBRSxpREFBc0IsQ0FBQztxQkFDNUQsQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHVDQUdDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7V2VhdGhlckxpc3RDb21wb25lbnR9IGZyb20gJy4vd2VhdGhlci93ZWF0aGVyLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7V2VhdGhlclNlYXJjaENvbXBvbmVudH0gZnJvbSAnLi93ZWF0aGVyL3dlYXRoZXItc2VhcmNoLmNvbXBvbmVudCc7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy9QcmluY2lwYWwgYXBwIHR5cGVzY3JpcHQgRG9jdW1lbnQgcmVsYXRlZCB0byBpbmRleC5odG1sLy8vLy8vLy8vLy8vLy8vLy9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHRpdGxlXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG5cbiAgICAgICAgICAgICAgICA8aDE+V2VhdGhlciBGb3JlY2FzdCBXZWIgQXBwbGljYXRpb248L2gxPlxuICAgICAgICAgICAgICAgIDxoMz5DdXJyZW50IHdlYXRoZXIgJiBGb3JlY2FzdCA8L2gzPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgIDx3ZWF0aGVyLXNlYXJjaD48L3dlYXRoZXItc2VhcmNoPlxuICAgICAgICAgICAgICAgIDx3ZWF0aGVyLWxpc3Q+PC93ZWF0aGVyLWxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczpbV2VhdGhlckxpc3RDb21wb25lbnQsIFdlYXRoZXJTZWFyY2hDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgXG5cbn0iXX0=
