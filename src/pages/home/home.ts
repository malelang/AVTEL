import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,LoadingController} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

 
export class HomePage {

  usuario: String;
  password: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, public loadingCtrl: LoadingController
     
  ) {
    this.usuario="";
    this.password="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  login() {
    let loading = this.loadingCtrl.create({ content: "Cargando ..." });
    loading.present();
    
      if (this.usuario=="calegria" && this.password=="1234") {
        
        this.navCtrl.setRoot(TabsPage);
        
        this.showToast("Sesión correctamente iniciada")
        loading.dismiss();
      } else {
        loading.dismiss();
        this.showToast("No se ha encontrado un usuario con estas características")
      }
    }


  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "top",
    });
    toast.present();
  }
}
