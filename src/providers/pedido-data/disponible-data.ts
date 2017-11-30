
import { Injectable } from '@angular/core';
import {Item} from './pedido';


@Injectable()
export class DisponibleDataProvider {
    
    data:Item[]= [
        { nombre: 'Arduino UNO', descripcion: 'Placa microcontrolada', cantidad:20, imagen: 'https://rukminim1.flixcart.com/image/704/704/learning-toy/g/u/c/arduino-arduino-uno-r3-original-imaehgwyhfbd2zcg.jpeg?q=70', usuario:'', componentes:'Una placa y un cable de conexion USB' },
        { nombre: 'Cable Ethernet', descripcion: 'Cable de conexión ethernet', cantidad:50, imagen: 'http://cuantocuesta.info/wp-content/uploads/2016/07/ethernet-1-1024x663.jpg', usuario:'',  componentes:'Un cable de conexión con terminaciones ethernet a lado y lado' },
        { nombre: 'Raspberry Pi', descripcion: 'Placa microcontrolada', cantidad:0, imagen: 'https://www.raspberrypi.org/app/uploads/2017/05/Raspberry-Pi-3-1-1619x1080.jpg', usuario:'', componentes: 'Una placa microcontrolada' },
        { nombre: 'Placa FPGA', descripcion: 'Dispositivo programable', cantidad:15, imagen: 'http://img.yunqudao.com/UploadFolder/4f2543ab-bfc8-48f0-9aff-c49e51612b75/Default/s-l1600__1__387.jpg', usuario:'', componentes:'Una placa programable FPGA junto con un cable de conexión' },
        
      ];

    constructor(){}

    restarCantidad(obj:any):Item{
        var index=this.data.indexOf(obj);
        console.log("El index del obj seleccionado es: "+index)
        if (index>-1){
            var nuevo=this.data[index];
            console.log("este es el objeto al que le voy a restar la cantidad")
            console.log(nuevo)
            nuevo.cantidad=nuevo.cantidad-1;
            console.log("ya le reste la cantidad: ")
            console.log(nuevo)
            console.log(nuevo)
            this.data.splice(index,1);
            this.data.push(nuevo);
            return nuevo;
        }
          }

    sumarCantidad(obj:any):Item{
        var index=this.data.indexOf(obj);
        console.log("El index del obj seleccionado es: "+index)
        if (index>-1){
            var nuevo=this.data[index];
            console.log("este es el objeto al que le voy a restar la cantidad")
            console.log(nuevo)
            nuevo.cantidad=nuevo.cantidad+1;
            console.log("ya le reste la cantidad: ")
            console.log(nuevo)
            this.data.splice(index,1);
            this.data.push(nuevo);
            return nuevo;
        }
          }
}