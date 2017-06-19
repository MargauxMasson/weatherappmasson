System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WeatherItem;
    return {
        setters:[],
        execute: function() {
            ///////////////////////////////Weather constructor, we can take name, description, temperature, pressure from the data ///////////////////////////
            WeatherItem = (function () {
                function WeatherItem(cityName, unit, description0, temperature0, night0, icon0, date0, description1, temperature1, night1, icon1, date1, description2, temperature2, night2, icon2, date2, description3, temperature3, night3, icon3, date3, description4, temperature4, night4, icon4, date4, description5, temperature5, night5, icon5, date5, description6, temperature6, night6, icon6, date6) {
                    this.cityName = cityName;
                    this.unit = unit;
                    this.description0 = description0;
                    this.temperature0 = temperature0;
                    this.night0 = night0;
                    this.icon0 = icon0;
                    this.date0 = date0;
                    this.description1 = description1;
                    this.temperature1 = temperature1;
                    this.night1 = night1;
                    this.icon1 = icon1;
                    this.date1 = date1;
                    this.description2 = description2;
                    this.temperature2 = temperature2;
                    this.night2 = night2;
                    this.icon2 = icon2;
                    this.date2 = date2;
                    this.description3 = description3;
                    this.temperature3 = temperature3;
                    this.night3 = night3;
                    this.icon3 = icon3;
                    this.date3 = date3;
                    this.description4 = description4;
                    this.temperature4 = temperature4;
                    this.night4 = night4;
                    this.icon4 = icon4;
                    this.date4 = date4;
                    this.description5 = description5;
                    this.temperature5 = temperature5;
                    this.night5 = night5;
                    this.icon5 = icon5;
                    this.date5 = date5;
                    this.description6 = description6;
                    this.temperature6 = temperature6;
                    this.night6 = night6;
                    this.icon6 = icon6;
                    this.date6 = date6;
                }
                return WeatherItem;
            }());
            exports_1("WeatherItem", WeatherItem);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQSxrSkFBa0o7WUFDbEo7Z0JBRUEscUJBQW1CLFFBQWdCLEVBQVUsSUFBWSxFQUN0QyxZQUFvQixFQUFTLFlBQW9CLEVBQVMsTUFBYyxFQUFRLEtBQWEsRUFBUyxLQUFhLEVBQ25ILFlBQW9CLEVBQVMsWUFBb0IsRUFBUyxNQUFjLEVBQVEsS0FBYSxFQUFTLEtBQWEsRUFDbkgsWUFBb0IsRUFBUyxZQUFvQixFQUFTLE1BQWMsRUFBUSxLQUFhLEVBQVMsS0FBYSxFQUNuSCxZQUFvQixFQUFTLFlBQW9CLEVBQVMsTUFBYyxFQUFRLEtBQWEsRUFBUyxLQUFhLEVBQ25ILFlBQW9CLEVBQVMsWUFBb0IsRUFBUyxNQUFjLEVBQVEsS0FBYSxFQUFTLEtBQWEsRUFDbkgsWUFBb0IsRUFBUyxZQUFvQixFQUFTLE1BQWMsRUFBUSxLQUFhLEVBQVMsS0FBYSxFQUNuSCxZQUFvQixFQUFTLFlBQW9CLEVBQVMsTUFBYyxFQUFRLEtBQWEsRUFBUyxLQUFhO29CQVBuSCxhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUFVLFNBQUksR0FBSixJQUFJLENBQVE7b0JBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVEsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUNuSCxpQkFBWSxHQUFaLFlBQVksQ0FBUTtvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBUTtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFRLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDbkgsaUJBQVksR0FBWixZQUFZLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQVE7b0JBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFBUSxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ25ILGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVEsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUNuSCxpQkFBWSxHQUFaLFlBQVksQ0FBUTtvQkFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBUTtvQkFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFRLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDbkgsaUJBQVksR0FBWixZQUFZLENBQVE7b0JBQVMsaUJBQVksR0FBWixZQUFZLENBQVE7b0JBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFBUSxVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7b0JBQ25ILGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFRO29CQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQVEsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUN4SCxDQUFDO2dCQUVmLGtCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCxxQ0FZQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1dlYXRoZXIgY29uc3RydWN0b3IsIHdlIGNhbiB0YWtlIG5hbWUsIGRlc2NyaXB0aW9uLCB0ZW1wZXJhdHVyZSwgcHJlc3N1cmUgZnJvbSB0aGUgZGF0YSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBjbGFzcyBXZWF0aGVySXRlbXtcblxuY29uc3RydWN0b3IocHVibGljIGNpdHlOYW1lOiBzdHJpbmcsICBwdWJsaWMgdW5pdDogc3RyaW5nLFxuICAgICAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uMDogc3RyaW5nLCBwdWJsaWMgdGVtcGVyYXR1cmUwOiBudW1iZXIsIHB1YmxpYyBuaWdodDA6IG51bWJlcixwdWJsaWMgaWNvbjA6IHN0cmluZywgcHVibGljIGRhdGUwOiBzdHJpbmcsXG4gICAgICAgICAgICBwdWJsaWMgZGVzY3JpcHRpb24xOiBzdHJpbmcsIHB1YmxpYyB0ZW1wZXJhdHVyZTE6IG51bWJlciwgcHVibGljIG5pZ2h0MTogbnVtYmVyLHB1YmxpYyBpY29uMTogc3RyaW5nLCBwdWJsaWMgZGF0ZTE6IHN0cmluZyxcbiAgICAgICAgICAgIHB1YmxpYyBkZXNjcmlwdGlvbjI6IHN0cmluZywgcHVibGljIHRlbXBlcmF0dXJlMjogbnVtYmVyLCBwdWJsaWMgbmlnaHQyOiBudW1iZXIscHVibGljIGljb24yOiBzdHJpbmcsIHB1YmxpYyBkYXRlMjogc3RyaW5nLFxuICAgICAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uMzogc3RyaW5nLCBwdWJsaWMgdGVtcGVyYXR1cmUzOiBudW1iZXIsIHB1YmxpYyBuaWdodDM6IG51bWJlcixwdWJsaWMgaWNvbjM6IHN0cmluZywgcHVibGljIGRhdGUzOiBzdHJpbmcsXG4gICAgICAgICAgICBwdWJsaWMgZGVzY3JpcHRpb240OiBzdHJpbmcsIHB1YmxpYyB0ZW1wZXJhdHVyZTQ6IG51bWJlciwgcHVibGljIG5pZ2h0NDogbnVtYmVyLHB1YmxpYyBpY29uNDogc3RyaW5nLCBwdWJsaWMgZGF0ZTQ6IHN0cmluZyxcbiAgICAgICAgICAgIHB1YmxpYyBkZXNjcmlwdGlvbjU6IHN0cmluZywgcHVibGljIHRlbXBlcmF0dXJlNTogbnVtYmVyLCBwdWJsaWMgbmlnaHQ1OiBudW1iZXIscHVibGljIGljb241OiBzdHJpbmcsIHB1YmxpYyBkYXRlNTogc3RyaW5nLFxuICAgICAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uNjogc3RyaW5nLCBwdWJsaWMgdGVtcGVyYXR1cmU2OiBudW1iZXIsIHB1YmxpYyBuaWdodDY6IG51bWJlcixwdWJsaWMgaWNvbjY6IHN0cmluZywgcHVibGljIGRhdGU2OiBzdHJpbmcsXG4gICAgICAgICAgICApe31cbiAgICBcbn0iXX0=
