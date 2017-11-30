import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Item} from '../../providers/pedido-data/pedido';
import {PrestadoDataProvider} from '../../providers/pedido-data/prestado-data'
import {DisponibleDataProvider} from '../../providers/pedido-data/disponible-data';
import {TabsPage} from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-devolver',
  templateUrl: 'devolver.html',
})
export class DevolverPage {


  data:Item[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: PrestadoDataProvider, public service2:DisponibleDataProvider,
    public toastCtrl:ToastController) {
    this.data=this.service.data;   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevolverPage');
  }

  devolverObjeto(d:Item){
    var index=this.service.data.indexOf(d);
    var vof=this.service2.sumarCantidad(d);
    this.service.data.splice(index);
    if(vof){
      console.log("IMPORTANTE Retorno la nueva cantidad de objetos: ")
      console.log(vof)
      
      this.showToast("Objeto devuelto exitosamente")
    }else{
      this.showToast("Error en el proceso de devolución, intente de nuevo")
    }
    this.navCtrl.setRoot(TabsPage); 
  }

  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "top",
    });
    toast.present();
  }
}
