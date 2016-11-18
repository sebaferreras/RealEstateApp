// Referencias de Angular
import { Component } from '@angular/core';

// Referencias de Ionic
import { NavController, NavParams, Platform, MenuController } from 'ionic-angular';

// Services
import { BrokerService } from '../../shared/broker.service';

// RxJS imports
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/broker/broker-detail/broker-detail.component.html'
})
export class BrokerDetailPage {

  public selectedBroker : any;

  constructor(private navParams: NavParams, 
              private brokerService: BrokerService) { 
    // Get the id of the property
    let id = this.navParams.get('brokerId');

    // Obtain the property details from the server
    this.brokerService.getBroker(id).subscribe((broker) => {
      this.selectedBroker = broker;
    });
  }
}
