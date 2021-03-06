import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Test} from "../../components/test/test";
import {Auth} from "../../decorators/auth.decorator";

@Auth()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToTest(){
    this.navCtrl.push(Test);
  }
}
