// Referencias de Angular
import { Component } from '@angular/core';

// Referencias de Ionic
import { NavController, NavParams, Platform, MenuController } from 'ionic-angular';

// Services
import { PropertyService } from '../../shared/property.service';

// Pages
import { BrokerDetailPage } from '../../broker/broker-detail/broker-detail.component';

// RxJS imports
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/property/property-detail/property-detail.component.html'
})
export class PropertyDetailPage {

  public selectedProperty : any;

  constructor(private navCtrl: NavController,
              private navParams: NavParams, 
              private propertyService: PropertyService) 
  { 
    // Get the id of the property
    let id = this.navParams.get('propertyId');

    // Obtain the property details from the server
    this.propertyService.getProperty(id).subscribe((property) => {
      this.selectedProperty = property;
    });
  }

  // Open broker details
  public openBrokerDetail(){
    this.navCtrl.push(BrokerDetailPage, { 'brokerId': this.selectedProperty.BrokerId });
  }
}
