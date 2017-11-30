import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PedidoDataProvider} from '../../providers/pedido-data/pedido-data'
import {Item} from '../../providers/pedido-data/pedido';

/**
 * Generated class for the PedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {
  currentItems:Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public service: PedidoDataProvider) {
    
    this.currentItems=service.data 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  deleteItem(c){
    let index = this.currentItems.indexOf(c);
    if (index > -1){
      this.currentItems.splice(index,1);
    }
  }

}
