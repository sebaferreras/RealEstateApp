// Referencias de Angular
import { Injectable } from '@angular/core';

export class MenuItemModel {

    constructor(private iconName: string, 
                private title: string, 
                private component: any,
                private isRoot: boolean) { }

  public getOutlineIosIcon(): string {
    return 'ios-' + this.iconName + '-outline';
  }

  public getIosIcon(): string {
    return 'ios-' + this.iconName;
  }

  public getAndroidIcon(): string {
    return 'md-' + this.iconName;
  }

  public getTitle(): string {
	  return this.title;
  }

  public getComponent(): any {
	  return this.component;
  }

  public getIsRoot(): boolean {
    return this.isRoot;
  }
}