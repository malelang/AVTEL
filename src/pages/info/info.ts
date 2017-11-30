import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import {Item} from '../../providers/pedido-data/pedido';
import {DisponibleDataProvider} from '../../providers/pedido-data/disponible-data'
//import {ItemDetailPage} from '../item-detail/item-detail';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {


  objDisponibles:Array<any>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: DisponibleDataProvider,
  public nav:Nav) {
    this.objDisponibles=service.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  openItem(item: any) {
    console.log(this.objDisponibles);
    console.log(item);
    this.nav.push('ItemDetailPage',{item:item});
  
  }
}
