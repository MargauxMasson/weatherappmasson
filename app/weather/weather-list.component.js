System.register(['angular2/core', "./weather-item.component", "./weather-service"], function(exports_1, context_1) {
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
    var core_1, weather_item_component_1, weather_service_1;
    var WeatherListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            ////////////////////Definition of the list of weather items : show the itemsnin weatherItems one by one thanks to *ngFor//////////////////////////
            WeatherListComponent = (function () {
                function WeatherListComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                WeatherListComponent.prototype.ngOnInit = function () {
                    this.weatherItems = this._weatherService.getWeatherItems();
                };
                WeatherListComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-list',
                        template: "\n                <section class =\"weather-list\">\n                <weather-item *ngFor=\"#weatherItem of weatherItems\" [item]=\"weatherItem\"></weather-item>\n                </section>\n    ",
                        directives: [weather_item_component_1.WeatherItemComponent]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherListComponent);
                return WeatherListComponent;
            }());
            exports_1("WeatherListComponent", WeatherListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBLGtKQUFrSjtZQWFsSjtnQkFJSSw4QkFBb0IsZUFBK0I7b0JBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtnQkFFbkQsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDN0QsQ0FBQztnQkF0Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLHFNQUlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixDQUFDO3FCQUVyQyxDQUFDOzt3Q0FBQTtnQkFlRiwyQkFBQztZQUFELENBWkEsQUFZQyxJQUFBO1lBWkQsdURBWUMsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydHtXZWF0aGVySXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vd2VhdGhlci1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci1pdGVtXCI7XG5pbXBvcnR7V2VhdGhlclNlcnZpY2V9IGZyb20gXCIuL3dlYXRoZXItc2VydmljZVwiO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vL0RlZmluaXRpb24gb2YgdGhlIGxpc3Qgb2Ygd2VhdGhlciBpdGVtcyA6IHNob3cgdGhlIGl0ZW1zbmluIHdlYXRoZXJJdGVtcyBvbmUgYnkgb25lIHRoYW5rcyB0byAqbmdGb3IvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3MgPVwid2VhdGhlci1saXN0XCI+XG4gICAgICAgICAgICAgICAgPHdlYXRoZXItaXRlbSAqbmdGb3I9XCIjd2VhdGhlckl0ZW0gb2Ygd2VhdGhlckl0ZW1zXCIgW2l0ZW1dPVwid2VhdGhlckl0ZW1cIj48L3dlYXRoZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbV2VhdGhlckl0ZW1Db21wb25lbnRdXG4gICAgXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBXZWF0aGVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB3ZWF0aGVySXRlbXM6IFdlYXRoZXJJdGVtW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2Upe1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnl7XG4gICAgICAgIHRoaXMud2VhdGhlckl0ZW1zPXRoaXMuX3dlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXJJdGVtcygpO1xuICAgIH1cblxufSJdfQ==
