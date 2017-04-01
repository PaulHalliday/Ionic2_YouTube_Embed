import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { Subscription } from 'rxjs/Subscription';
import { DetailPage } from '../../pages/detail/detail';
/*
  Generated class for the Master page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-master',
  templateUrl: 'master.html'
})
export class MasterPage {

  sheetsuData: Subscription[];

  constructor(private dataService: DataService, public navCtrl: NavController, public navParams: NavParams) { }

  ionViewWillLoad() {
    this.dataService.getRemoteData()
      .subscribe(response => {
        // assign variable (async)
        this.sheetsuData = response;
      });
  }

  itemTapped(data) {
    console.log(data);
    this.navCtrl.push(DetailPage, {
      data: data
    });
  }
}
