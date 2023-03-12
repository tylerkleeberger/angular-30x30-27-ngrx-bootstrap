import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SecondaryService } from '../secondary/secondary.service';
import { SecondaryModel } from '../shared/secondary.model';
import { PrimaryModel } from './primary.model';

@Injectable({
  providedIn: 'root'
})
export class PrimaryService {

  constructor(
    private secondaryService: SecondaryService
  ) { }

  primaryItemsChanged = new Subject<PrimaryModel[]>();

  private primaryItems: PrimaryModel[] = [];

  setPrimaryItems(primaryItems: PrimaryModel[]) {
    this.primaryItems = primaryItems;
    this.primaryItemsChanged.next(this.primaryItems.slice())
  }

  getAllPrimaryItems() {
    return this.primaryItems.slice();
  }

  getOnePrimaryItem(index: number) {
    return this.primaryItems[index];
  }

  addPrimaryItem(primaryItem: PrimaryModel) {
    this.primaryItems.push(primaryItem);
    this.primaryItemsChanged.next(this.primaryItems.slice())
  }

  updatePrimaryItem(index: number, newPrimaryItem: PrimaryModel) {
    this.primaryItems[index] = newPrimaryItem;
    this.primaryItemsChanged.next(this.primaryItems.slice())
  }

  deletePrimaryItem(index: number) {
    this.primaryItems.splice(index, 1);
    this.primaryItemsChanged.next(this.primaryItems.slice())
  }

  addSecondaryItemToSecondaryList(secondaryItems: SecondaryModel[]) {
    this.secondaryService.addSecondaryItems(secondaryItems);
  }

}
