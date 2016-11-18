// Referencias de Angular
import { Component } from '@angular/core';

// RxJS imports
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// Referencias de Ionic
import { NavController, Platform, MenuController } from 'ionic-angular';

// Services
import { BrokerService } from '../../shared/broker.service';

// Pages
import { BrokerDetailPage } from '../broker-detail/broker-detail.component';

@Component({
  templateUrl: 'build/broker/broker-list/broker-list.component.html'
})
export class BrokerListPage {

  public brokerList : Array<any>;

  constructor(private navCtrl: NavController, 
              private brokerService: BrokerService) 
  { 
    this.brokerList = [];

    this.brokerService.getAllBrokers().subscribe((properties) => {
      this.brokerList = properties;
    });
  }

  public openDetails(selectedBroker: any) {
    this.navCtrl.push(BrokerDetailPage, { 'brokerId' : selectedBroker.Id });
  }


}
