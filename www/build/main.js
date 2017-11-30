webpackJsonp([6],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevolverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pedido_data_prestado_data__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pedido_data_disponible_data__ = __webpack_require__(52);
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





var DevolverPage = (function () {
    function DevolverPage(navCtrl, navParams, service, service2, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.service2 = service2;
        this.toastCtrl = toastCtrl;
        this.data = [];
        this.data = this.service.data;
    }
    DevolverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevolverPage');
    };
    DevolverPage.prototype.devolverObjeto = function (d) {
        var index = this.service.data.indexOf(d);
        var vof = this.service2.sumarCantidad(d);
        this.service.data.splice(index);
        if (vof) {
            console.log("IMPORTANTE Retorno la nueva cantidad de objetos: ");
            console.log(vof);
            this.showToast("Objeto devuelto exitosamente");
        }
        else {
            this.showToast("Error en el proceso de devolución, intente de nuevo");
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    DevolverPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: "top",
        });
        toast.present();
    };
    DevolverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-devolver',template:/*ion-inline-start:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/devolver/devolver.html"*/'\n<ion-header>\n  \n    <ion-navbar color="primary">\n      <ion-title>Devolver items</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding class="perfil-bg">\n    <h6>Estos son los items que han sido prestados</h6>\n    <ion-card *ngFor="let d of data">\n      <img src="{{d.imagen}}" alt="">\n      <ion-card-header>{{d.nombre}}</ion-card-header>\n      <ion-card-content>\n        <ion-label>Pedido por: {{d.usuario}}</ion-label>\n        <button col-6 offset-5 color="danger" ion-button icon-end (click)="devolverObjeto(d)">\n          DEVOLVER\n          <ion-icon name="folder"></ion-icon>\n        </button>\n      </ion-card-content>\n    </ion-card>\n  \n  </ion-content>'/*ion-inline-end:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/devolver/devolver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pedido_data_prestado_data__["a" /* PrestadoDataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_pedido_data_disponible_data__["a" /* DisponibleDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], DevolverPage);
    return DevolverPage;
}());

//# sourceMappingURL=devolver.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrestadoDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pedido__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrestadoDataProvider = (function () {
    function PrestadoDataProvider() {
        this.data = [];
        this.itempres = new __WEBPACK_IMPORTED_MODULE_1__pedido__["a" /* Item */];
    }
    PrestadoDataProvider.prototype.asignarNombre = function (nombre, item) {
        this.itempres = item;
        this.itempres.usuario = nombre;
        console.log("item con el nombre cambiado");
        console.log(this.itempres);
    };
    PrestadoDataProvider.prototype.cambiarDisponible = function () {
        this.itempres.cantidad = 1;
        console.log("le cambie la cantidad ya");
        this.data.push(this.itempres);
        console.log(this.itempres);
        console.log(this.data);
    };
    PrestadoDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PrestadoDataProvider);
    return PrestadoDataProvider;
}());

//# sourceMappingURL=prestado-data.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pedido_data_disponible_data__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {ItemDetailPage} from '../item-detail/item-detail';
var InfoPage = (function () {
    function InfoPage(navCtrl, navParams, service, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.nav = nav;
        this.objDisponibles = [];
        this.objDisponibles = service.data;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage.prototype.openItem = function (item) {
        console.log(this.objDisponibles);
        console.log(item);
        this.nav.push('ItemDetailPage', { item: item });
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/info/info.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Objetos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="perfil-bg">\n  <p>Los siguientes son los objetos disponibles en el inventario:</p>\n  <ion-list>\n      \n        <button ion-item *ngFor="let item of objDisponibles" (click)="openItem(item)">\n          <ion-avatar item-left>\n            <img [src]="item.imagen" />\n          </ion-avatar>\n          <h2>{{item.nombre}}</h2>\n          <p>{{item.descripcion}}</p>\n        </button>\n \n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pedido_data_disponible_data__["a" /* DisponibleDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pedido_data_pedido_data__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PedidosPage = (function () {
    function PedidosPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.currentItems = service.data;
    }
    PedidosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PedidosPage');
    };
    PedidosPage.prototype.deleteItem = function (c) {
        var index = this.currentItems.indexOf(c);
        if (index > -1) {
            this.currentItems.splice(index, 1);
        }
    };
    PedidosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pedidos',template:/*ion-inline-start:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/pedidos/pedidos.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Pedidos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="perfil-bg">\n    <p>Se han realizado los siguientes pedidos:</p>\n\n    <ion-row>\n      <ion-col col-9></ion-col>\n      <ion-card *ngFor="let c of currentItems">\n        <img src="{{c.imagen}}" alt="">\n        <ion-card-content>\n        <ion-card-title>{{c.nombre}}</ion-card-title>\n        <ion-item name="information">{{c.descripcion}}</ion-item>\n        <ion-item name="basket">Cantidad: {{c.cantidad}}</ion-item>\n        <ion-item name="person">Quien lo pide: {{c.usuario}}</ion-item>\n        <button ion-button round color="danger" (click)="deleteItem(c)">BORRAR</button>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/pedidos/pedidos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pedido_data_pedido_data__["a" /* PedidoDataProvider */]])
    ], PedidosPage);
    return PedidosPage;
}());

//# sourceMappingURL=pedidos.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devolver_devolver__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrincipalPage = (function () {
    function PrincipalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalPage');
    };
    PrincipalPage.prototype.logout = function () {
        this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PrincipalPage.prototype.gotoDevolver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__devolver_devolver__["a" /* DevolverPage */]);
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/principal/principal.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Principal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n\n<ion-content padding class="perfil-bg">\n\n  <p>Bienvenido, usuario administrador</p>\n\n  <ion-row >\n    <ion-col col-6 offset-1 col-md-4 offset-md-2 col-lg-4 offset-lg-3>\n      <div class="marco">\n        <ion-card>\n          <img src="  http://demo.solwininfotech.com/wordpress/veriyas-pro/wp-content/uploads/2016/05/John-Doe.jpg" alt="">\n        </ion-card>\n      </div>\n    </ion-col>\n    <ion-col col-5 col-md-4 offset-md-1 col-lg-3 offset-lg-1>\n      <h3 class="perfil-title"> Carlos Alegría</h3>\n      <ion-icon name="analytics"> Administrador </ion-icon>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row>\n    <ion-card>\n      <ion-icon name="alert" color="danger"></ion-icon>\n      <p>Recuerda revisar los implementos de laboratorio antes de comenzar la jornada</p>\n    </ion-card>\n    <br>\n    <ion-card>\n      <ion-icon name="alert" color="danger"></ion-icon>\n      <p>El salón 326 está ocupado hoy con la clase: Enfasis 1 Tm</p>\n    </ion-card>\n    <br>\n    <ion-card>\n      <ion-icon name="alert" color="danger"></ion-icon>\n      <p>El salón 334 está ocupado hoy con la clase: Desarrollo de Aplicaciones Móviles</p>\n    </ion-card>\n    <br>\n    <ion-card>\n      <ion-icon name="alert" color="danger"></ion-icon>\n      <p>El salón 328 está ocupado con la clase: Metodología de la investigación</p>\n    </ion-card>\n    <br>\n    <ion-card>\n      <ion-icon name="alert" color="danger"></ion-icon>\n      <p>Recuerde revisar la información a publicar en el televisor público</p>\n    </ion-card>\n  </ion-row>\n  <br><br>\n  \n  <ion-fab right bottom >\n      <button ion-fab color="danger"><ion-icon name="arrow-dropleft"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab (click)="logout()"><ion-icon name="key"></ion-icon></button>\n        <button ion-fab (click)="gotoDevolver()"><ion-icon name="remove"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/principal/principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/devolver/devolver.module": [
		292,
		5
	],
	"../pages/info/info.module": [
		293,
		4
	],
	"../pages/item-detail/item-detail.module": [
		294,
		1
	],
	"../pages/pedidos/pedidos.module": [
		295,
		3
	],
	"../pages/principal/principal.module": [
		296,
		2
	],
	"../pages/search/search.module": [
		297,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PedidoDataProvider = (function () {
    function PedidoDataProvider() {
        this.data = [
            { nombre: 'Arduino UNO', descripcion: 'Placa microcontrolada', cantidad: 2, imagen: 'https://rukminim1.flixcart.com/image/704/704/learning-toy/g/u/c/arduino-arduino-uno-r3-original-imaehgwyhfbd2zcg.jpeg?q=70', usuario: 'Juan Camilo Sánchez', componentes: 'Una placa y un cable de conexion USB' },
            { nombre: 'Cable Ethernet', descripcion: 'Cable de conexión ethernet', cantidad: 3, imagen: 'http://cuantocuesta.info/wp-content/uploads/2016/07/ethernet-1-1024x663.jpg', usuario: 'Michelle Dayana', componentes: 'Un cable de conexión con terminaciones ethernet a lado y lado' },
            { nombre: 'Raspberry Pi', descripcion: 'Placa microcontrolada', cantidad: 1, imagen: 'https://www.raspberrypi.org/app/uploads/2017/05/Raspberry-Pi-3-1-1619x1080.jpg', usuario: 'Sebastian Cajas', componentes: 'Una placa microcontrolada' },
            { nombre: 'Placa FPGA', descripcion: 'Dispositivo programable', cantidad: 1, imagen: 'http://img.yunqudao.com/UploadFolder/4f2543ab-bfc8-48f0-9aff-c49e51612b75/Default/s-l1600__1__387.jpg', usuario: 'Pedro Astaiza', componentes: 'Una placa programable FPGA junto con un cable de conexión' },
            { nombre: 'Arduino UNO', descripcion: 'Placa microcontrolada', cantidad: 1, imagen: 'https://rukminim1.flixcart.com/image/704/704/learning-toy/g/u/c/arduino-arduino-uno-r3-original-imaehgwyhfbd2zcg.jpeg?q=70', usuario: 'Santiago Teran', componentes: 'Una placa y un cable de conexion USB' },
        ];
    }
    PedidoDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PedidoDataProvider);
    return PedidoDataProvider;
}());

//# sourceMappingURL=pedido-data.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_principal_principal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pedidos_pedidos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_info_info__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_devolver_devolver__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_pedido_data_pedido_data__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_pedido_data_disponible_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_pedido_data_prestado_data__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_registro_registro__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import {SearchPage} from '../pages/search/search';
//import {ItemDetailPage} from '../pages/item-detail/item-detail';




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_devolver_devolver__["a" /* DevolverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/devolver/devolver.module#DevolverPageModule', name: 'DevolverPage', segment: 'devolver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedidos/pedidos.module#PedidosPageModule', name: 'PedidosPage', segment: 'pedidos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/principal/principal.module#PrincipalPageModule', name: 'PrincipalPage', segment: 'principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pedidos_pedidos__["a" /* PedidosPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_principal_principal__["a" /* PrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_devolver_devolver__["a" /* DevolverPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_pedido_data_pedido_data__["a" /* PedidoDataProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_pedido_data_disponible_data__["a" /* DisponibleDataProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_pedido_data_prestado_data__["a" /* PrestadoDataProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_registro_registro__["a" /* RegistroProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
    }
    return Item;
}());

//# sourceMappingURL=pedido.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alejandralandinez/Desktop/AVTEL/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/alejandralandinez/Desktop/AVTEL/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroProvider; });
/* unused harmony export SimpleResponse */
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistroProvider = (function () {
    function RegistroProvider(http) {
        this.http = http;
        console.log('1. Conexión a HttpCliente  exitoso');
    }
    RegistroProvider.prototype.login = function (username, password) {
        var url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* URL */] + "users/login";
        var req = { username: username, password: password };
        return this.http.post(url, req);
    };
    RegistroProvider.prototype.signin = function (email, username, password) {
        var dir = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* URL */] + "users/signin";
        var req = { email: email, username: username, password: password };
        return this.http.post(dir, req);
    };
    RegistroProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RegistroProvider);
    return RegistroProvider;
}());

var SimpleResponse = (function () {
    function SimpleResponse() {
    }
    return SimpleResponse;
}());

var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });
var URL = "https://avtel.herokuapp.com/";
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisponibleDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisponibleDataProvider = (function () {
    function DisponibleDataProvider() {
        this.data = [
            { nombre: 'Arduino UNO', descripcion: 'Placa microcontrolada', cantidad: 20, imagen: 'https://rukminim1.flixcart.com/image/704/704/learning-toy/g/u/c/arduino-arduino-uno-r3-original-imaehgwyhfbd2zcg.jpeg?q=70', usuario: '', componentes: 'Una placa y un cable de conexion USB' },
            { nombre: 'Cable Ethernet', descripcion: 'Cable de conexión ethernet', cantidad: 50, imagen: 'http://cuantocuesta.info/wp-content/uploads/2016/07/ethernet-1-1024x663.jpg', usuario: '', componentes: 'Un cable de conexión con terminaciones ethernet a lado y lado' },
            { nombre: 'Raspberry Pi', descripcion: 'Placa microcontrolada', cantidad: 0, imagen: 'https://www.raspberrypi.org/app/uploads/2017/05/Raspberry-Pi-3-1-1619x1080.jpg', usuario: '', componentes: 'Una placa microcontrolada' },
            { nombre: 'Placa FPGA', descripcion: 'Dispositivo programable', cantidad: 15, imagen: 'http://img.yunqudao.com/UploadFolder/4f2543ab-bfc8-48f0-9aff-c49e51612b75/Default/s-l1600__1__387.jpg', usuario: '', componentes: 'Una placa programable FPGA junto con un cable de conexión' },
        ];
    }
    DisponibleDataProvider.prototype.restarCantidad = function (obj) {
        var index = this.data.indexOf(obj);
        console.log("El index del obj seleccionado es: " + index);
        if (index > -1) {
            var nuevo = this.data[index];
            console.log("este es el objeto al que le voy a restar la cantidad");
            console.log(nuevo);
            nuevo.cantidad = nuevo.cantidad - 1;
            console.log("ya le reste la cantidad: ");
            console.log(nuevo);
            console.log(nuevo);
            this.data.splice(index, 1);
            this.data.push(nuevo);
            return nuevo;
        }
    };
    DisponibleDataProvider.prototype.sumarCantidad = function (obj) {
        var index = this.data.indexOf(obj);
        console.log("El index del obj seleccionado es: " + index);
        if (index > -1) {
            var nuevo = this.data[index];
            console.log("este es el objeto al que le voy a restar la cantidad");
            console.log(nuevo);
            nuevo.cantidad = nuevo.cantidad + 1;
            console.log("ya le reste la cantidad: ");
            console.log(nuevo);
            this.data.splice(index, 1);
            this.data.push(nuevo);
            return nuevo;
        }
    };
    DisponibleDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DisponibleDataProvider);
    return DisponibleDataProvider;
}());

//# sourceMappingURL=disponible-data.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_info__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedidos_pedidos__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__principal_principal__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__principal_principal__["a" /* PrincipalPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__info_info__["a" /* InfoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__pedidos_pedidos__["a" /* PedidosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Principal" tabIcon="person"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Pedidos" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Objetos" tabIcon="information-circle"></ion-tab>\n  \n  \n</ion-tabs>\n'/*ion-inline-end:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, navParams, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.usuario = "";
        this.password = "";
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.login = function () {
        var loading = this.loadingCtrl.create({ content: "Cargando ..." });
        loading.present();
        if (this.usuario == "calegria" && this.password == "1234") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            this.showToast("Sesión correctamente iniciada");
            loading.dismiss();
        }
        else {
            loading.dismiss();
            this.showToast("No se ha encontrado un usuario con estas características");
        }
    };
    HomePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: "top",
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/home/home.html"*/'<ion-content padding class="login-bg no-scroll">\n  <form #form="ngForm">\n    <div class="login-main">\n\n      <h1 class="login-title" text-center>AVTEL</h1>\n      <div class="login-form">\n        <ion-row style="position:fixed; bottom:200px; right:30px; left:30px">\n          <ion-col col-12 col-md-6 offset-md-2 col-lg-4 offset-lg-4>\n            <ion-item color="glass">\n              <ion-label fixed color="light">Usuario</ion-label>\n              <ion-input name="nombre" type="text" [(ngModel)]="usuario" required></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 col-md-6 offset-md-2 col-lg-4 offset-lg-4 margin-top>\n            <ion-item color="glass">\n              <ion-label fixed color="light">Contraseña</ion-label>\n              <ion-input name="contraseña" type="password" [(ngModel)]="password" required></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-footer no-shadow color="glass">\n        <ion-toolbar position="bottom" color="glass">\n          <button ion-col col-5 offset-4 col-md-2 col-lg-2 ion-button color="primary" round (click)="login()" [disabled]="!form.valid">Entrar</button>\n        </ion-toolbar>\n      </ion-footer>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map