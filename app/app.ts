// Angular imports
import { Component, enableProdMode, ViewChild } from '@angular/core';

// Ionic imports
import { ionicBootstrap, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

// Pages
import { PropertyListPage } from './property/property-list/property-list.component';
import { BrokerListPage } from './broker/broker-list/broker-list.component';

// Services
import { PropertyService } from './shared/property.service';
import { BrokerService } from './shared/broker.service';

// Models
import { MenuItemModel } from './shared/menu-item.model';

@Component({
  templateUrl: 'build/app.html',
  providers: [PropertyService, BrokerService]
})
export class RealEstateApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = PropertyListPage;
  public menuItems: Array<MenuItemModel> = [];

  constructor(private platform: Platform, 
              private menuCtrl: MenuController) {
    this.initializeApp();
  }

  public initializeApp(): void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.initializeSideMenu();
    });
  }

  // Method that opens a page sent as parameter
  public openPage(page: MenuItemModel) {

    if(page.getIsRoot()) {
      this.nav.setRoot(page.getComponent()).then(() => {
        this.menuCtrl.close();
      });
    } else {
      this.nav.push(page.getComponent()).then(() => {
        this.menuCtrl.close();
      });
    }
  }


  // Método que inicializa el menú principal
  public initializeSideMenu(): void {    
    this.menuItems.push(new MenuItemModel('home', 'Properties', PropertyListPage, true));
    this.menuItems.push(new MenuItemModel('people', 'Brokers', BrokerListPage, true));
  }
}

// Habilitamos el modo de produccion
enableProdMode();

// Bootstrapping
ionicBootstrap(RealEstateApp, [], {});


