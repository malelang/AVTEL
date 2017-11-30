import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Item} from '../../providers/pedido-data/pedido';
import {DisponibleDataProvider} from '../../providers/pedido-data/disponible-data'
import {PrestadoDataProvider} from '../../providers/pedido-data/prestado-data';
import {TabsPage} from '../tabs/tabs';
import{InfoPage} from '../info/info'
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public item : any={}
  public prestado:any;
  searchQuery: string = '';
  owners: string[];
  nombre: string="";
  disponibles:Item[]=[]
  vof:Boolean=false;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public service:DisponibleDataProvider,public toastCtrl:ToastController,
  public service2:PrestadoDataProvider) {
    this.item = navParams.get('item');
    this.prestado=this.item
    console.log("item que llega de itemdetail")
    console.log(this.item);
    console.log("item prestado para modificacion")
    console.log(this.prestado);
    this.initializeOwners();
    this.disponibles=this.service.data;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  initializeOwners() {
    this.owners = ['Pedro Alejandro Astaiza','Sebastian Andres Cajas','Diego Andres Imbus','Danel Eduardo Collazos',
    'María Alejandra Landínez','Natalia Arteaga','Yeison Eduardo Caicedo', 'Carlos Delgado', 'Hamil Santiago Teran',
    'Carlos José Sepulveda','Juan Camilo Sanchez','Michelle Dayana Lopez','Juan David Ocampo','Sebastián Landínez'  ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeOwners();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.owners = this.owners.filter((oneowner) => {
        var index= (oneowner.toLowerCase().indexOf(val.toLowerCase()) > -1);
        return index;
      })
    }
  }

  prestar(){
    //this.prestado=this.item; 
    
    console.log(this.prestado);
    this.service2.asignarNombre(this.nombre,this.prestado); //tenog un objeto en el provider que le asigno el nombre de quien lo pidio
    //this.service2.cambiarDisponible(); //cambio el numero de muchos objeto s a uno solo que fue el que se pidio.
    //Retorno nuevo
    var vof=this.service.restarCantidad(this.prestado);
    if(vof){
      console.log("IMPORTANTE Retorno la nueva cantidad de objetos: ")
      console.log(vof)
      this.service2.data.push(vof);
      this.showToast("Objeto prestado exitosamente")
    }else{
      this.showToast("Error en el proceso de prestado, intente de nuevo")
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
