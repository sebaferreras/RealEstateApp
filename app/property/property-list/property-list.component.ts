// Referencias de Angular
import { Component } from '@angular/core';

// RxJS imports
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

// Referencias de Ionic
import { NavController, Platform, MenuController } from 'ionic-angular';

// Services
import { PropertyService } from '../../shared/property.service';

// Pages
import { PropertyDetailPage } from '../property-detail/property-detail.component';

@Component({
  templateUrl: 'build/property/property-list/property-list.component.html'
})
export class PropertyListPage {

  public propertiesList : Array<any>;

  constructor(private navCtrl: NavController, 
              private propertyService: PropertyService) 
  { 
    this.propertiesList = [];

    this.propertyService.getAllProperties().subscribe((properties) => {
      this.propertiesList = properties;
    });
  }

  public openDetails(selectedProperty: any) {
    this.navCtrl.push(PropertyDetailPage, { 'propertyId' : selectedProperty.Id });
  }


}
