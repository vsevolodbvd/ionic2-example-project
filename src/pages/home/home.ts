import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import {ShopPage} from '../shop/shop';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image: string;

  constructor(public navCtrl: NavController) {}

  onGoToShop() {
    this.navCtrl.push(ShopPage);
  }

}
