"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.cartoons = [{
                "name": "Scooby Doo",
                "speciality": "Ghost Hunter",
                "Says": "where are you?"
            },
            {
                "name": "Uncle Scrooge",
                "speciality": "Millionaire",
                "Says": "money money money"
            },
            {
                "name": "Popeye",
                "speciality": "Spinach lover",
                "Says": "the sailor man"
            },
            {
                "name": "Minnie Mouse",
                "speciality": "Pretty",
                "Says": "mickey oh mickey"
            },
            {
                "name": "Dexter",
                "speciality": "Laboratory Owner",
                "Says": "didiiii"
            }];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h2>Inbuilt and Custom pipes</h2>\n                    <table class=\"table table-bordered table-striped\">\n                      <thead>\n                        <tr>\n                          <th>Name (Built-In pipe)</th>\n                          <th>Known for being (Built-In pipe)</th>\n                          <th>Says what?(Custom Pipe for first letter capitalization)</th>\n                        </tr>\n                      </thead>\n                      <tbody *ngFor=\"let cartoon of cartoons\"><!-- Iterate through the cartoons array-->\n                      <tr>\n                        <td>{{cartoon.name|uppercase}}</td>\n                        <td>{{cartoon.speciality|lowercase}}</td>\n                        <td>{{cartoon.Says|capitalize}}</td>\n                      </tr>\n                      </tbody>\n                    </table>\n\n  \n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map