import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  public item : any={
  
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, nav:Nav) {
    this.item = navParams.get('item');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

  goToPedir(item:any){
    this.navCtrl.push('SearchPage',{item:item});
    console.log(item)
  }

}
