webpackJsonp([1],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_detail__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemDetailPageModule = (function () {
    function ItemDetailPageModule() {
    }
    ItemDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_detail__["a" /* ItemDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_detail__["a" /* ItemDetailPage */]),
            ],
        })
    ], ItemDetailPageModule);
    return ItemDetailPageModule;
}());

//# sourceMappingURL=item-detail.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailPage = (function () {
    function ItemDetailPage(navCtrl, navParams, nav) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = {};
        this.item = navParams.get('item');
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemDetailPage');
    };
    ItemDetailPage.prototype.goToPedir = function (item) {
        this.navCtrl.push('SearchPage', { item: item });
        console.log(item);
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/item-detail/item-detail.html"*/'<ion-header>\n    \n      <ion-navbar color="secondary">\n        <ion-title></ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n    \n    \n    <ion-content>\n      \n    <ion-row>\n      <div class="item-profile">\n        <img src="{{item.imagen}}" alt="">\n      </div>\n    </ion-row>\n    <ion-row>\n      <div class="item-detail" padding>\n        <h2 class="perfil-title">{{item.nombre}}</h2>\n        <br>\n        <p>{{item.descripcion}}</p>\n        <br>\n        <p>Disponibles: {{item.cantidad}}</p>\n        <br>\n        <p>Componentes: {{item.componentes}}</p>\n      </div>\n      </ion-row>\n    <ion-footer no-shadow color="glass">\n      <ion-toolbar position="bottom" color="glass">\n      \n      <button ion-col col-5 offset-6 round color="secondary" ion-button *ngIf="item.cantidad > 0" (click)="goToPedir(item)">Prestar Item</button>\n    \n      \n      <p ion-col col-9 offset-2 *ngIf="item.cantidad==0">No hay existencias disponibles en este momento, borre el pedido o espere hasta que devuelvan las existencias</p>\n      \n    </ion-toolbar>\n  </ion-footer>\n    \n\n    </ion-content>'/*ion-inline-end:"/Users/alejandralandinez/Desktop/AVTEL/src/pages/item-detail/item-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ })

});
//# sourceMappingURL=1.js.map