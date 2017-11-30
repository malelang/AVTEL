webpackJsonp([0],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pedido_data_disponible_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pedido_data_prestado_data__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, service, toastCtrl, service2) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.toastCtrl = toastCtrl;
        this.service2 = service2;
        this.item = {};
        this.searchQuery = '';
        this.nombre = "";
        this.disponibles = [];
        this.vof = false;
        this.item = navParams.get('item');
        this.prestado = this.item;
        console.log("item que llega de itemdetail");
        console.log(this.item);
        console.log("item prestado para modificacion");
        console.log(this.prestado);
        this.initializeOwners();
        this.disponibles = this.service.data;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.initializeOwners = function () {
        this.owners = ['Pedro Alejandro Astaiza', 'Sebastian Andres Cajas', 'Diego Andres Imbus', 'Danel Eduardo Collazos',
            'María Alejandra Landínez', 'Natalia Arteaga', 'Yeison Eduardo Caicedo', 'Carlos Delgado', 'Hamil Santiago Teran',
            'Carlos José Sepulveda', 'Juan Camilo Sanchez', 'Michelle Dayana Lopez', 'Juan David Ocampo', 'Sebastián Landínez'];
    };
    SearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeOwners();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.owners = this.owners.filter(function (oneowner) {
                var index = (oneowner.toLowerCase().indexOf(val.toLowerCase()) > -1);
                return index;
            });
        }
    };
    SearchPage.prototype.prestar = function () {
        //this.prestado=this.item; 
        console.log(this.prestado);
        this.service2.asignarNombre(this.nombre, this.prestado); //tenog un objeto en el provider que le asigno el nombre de quien lo pidio
        //this.service2.cambiarDisponible(); //cambio el numero de muchos objeto s a uno solo que fue el que se pidio.
        //Retorno nuevo
        var vof = this.service.restarCantidad(this.prestado);
        if (vof) {
            console.log("IMPORTANTE Retorno la nueva cantidad de objetos: ");
            console.log(vof);
            this.service2.data.push(vof);
            this.showToast("Objeto prestado exitosamente");
        }
        else {
            this.showToast("Error en el proceso de prestado, intente de nuevo");
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    SearchPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: "top",
        });
        toast.present();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/search/search.html"*/'\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Busqueda...</ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n\n<ion-content padding>\n    <p>Seleccione la persona que hace el encargo</p>\n    <form #form="ngForm">\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list radio-group [(ngModel)]="nombre" name="nombre" required>\n      <ion-item *ngFor="let o of owners">\n          <ion-label color="dark">{{o}}</ion-label>\n          <ion-radio value={{o}}></ion-radio>\n      </ion-item>\n    </ion-list>\n  \n  <ion-row>\n      <button col-4 offset-7 ion-button color="danger" block (click)="prestar()" [disabled]="!form.valid">CONTINUAR</button>\n    </ion-row>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pedido_data_disponible_data__["a" /* DisponibleDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pedido_data_prestado_data__["a" /* PrestadoDataProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=0.js.map