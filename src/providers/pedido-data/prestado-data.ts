
import { Injectable } from '@angular/core';
import {Item} from './pedido';




@Injectable()
export class PrestadoDataProvider {

  data:Item[]= [];
  itempres:Item;

  constructor() {
    this.itempres= new Item;
  }


  asignarNombre(nombre:string, item:Item){
    this.itempres=item;
    this.itempres.usuario=nombre;
    console.log("item con el nombre cambiado")
    console.log(this.itempres);
  }

  cambiarDisponible(){
    this.itempres.cantidad=1;
    console.log("le cambie la cantidad ya")
    this.data.push(this.itempres);
    console.log(this.itempres);
    console.log(this.data);
  }
}
