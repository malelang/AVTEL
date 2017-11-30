import { Component } from '@angular/core';
import {InfoPage} from '../info/info';
import {PedidosPage} from '../pedidos/pedidos';
import {PrincipalPage} from '../principal/principal';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PrincipalPage;
  tab3Root= InfoPage;
  tab2Root = PedidosPage;

  

  constructor() {}
}
