
import { Injectable } from '@angular/core';
import {Item} from './pedido';


@Injectable()
export class PedidoDataProvider {

  data:Item[]= [
    { nombre: 'Arduino UNO', descripcion: 'Placa microcontrolada', cantidad:1, imagen: 'https://rukminim1.flixcart.com/image/704/704/learning-toy/g/u/c/arduino-arduino-uno-r3-original-imaehgwyhfbd2zcg.jpeg?q=70', usuario:'Juan Camilo Sánchez', componentes:'Una placa y un cable de conexion USB' },
    { nombre: 'Cable Ethernet', descripcion: 'Cable de conexión ethernet', cantidad:1, imagen: 'http://cuantocuesta.info/wp-content/uploads/2016/07/ethernet-1-1024x663.jpg', usuario:'Michelle Dayana', componentes:'Un cable de conexión con terminaciones ethernet a lado y lado' },
    { nombre: 'Raspberry Pi', descripcion: 'Placa microcontrolada', cantidad:1, imagen: 'https://www.raspberrypi.org/app/uploads/2017/05/Raspberry-Pi-3-1-1619x1080.jpg', usuario:'Sebastian Cajas', componentes: 'Una placa microcontrolada' },
    { nombre: 'Placa FPGA', descripcion: 'Dispositivo programable', cantidad:1, imagen: 'http://img.yunqudao.com/UploadFolder/4f2543ab-bfc8-48f0-9aff-c49e51612b75/Default/s-l1600__1__387.jpg', usuario:'Pedro Astaiza', componentes:'Una placa programable FPGA junto con un cable de conexión' },
    { nombre: 'Arduino UNO', descripcion: 'Placa microcontrolada', cantidad:1, imagen: 'https://rukminim1.flixcart.com/image/704/704/learning-toy/g/u/c/arduino-arduino-uno-r3-original-imaehgwyhfbd2zcg.jpeg?q=70',usuario:'Santiago Teran',componentes:'Una placa y un cable de conexion USB' },
    
  ];

  constructor() {
    
  }
}
