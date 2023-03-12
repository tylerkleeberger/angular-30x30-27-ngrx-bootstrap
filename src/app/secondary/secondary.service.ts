import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SecondaryModel } from '../shared/secondary.model';

@Injectable({
  providedIn: 'root'
})
export class SecondaryService {

  secondaryItemsChanged = new Subject<SecondaryModel[]>();
  startedEditing = new Subject<number>();

  private secondaryItems: SecondaryModel[] = [
    new SecondaryModel('Preset Item 01', 5),
    new SecondaryModel('Preset Item 02', 10),
  ];

  getAllSecondaryItems() {
    return this.secondaryItems.slice();
  }

  getOneSecondaryItem(index: number) {
    return this.secondaryItems[index];
  }

  addSecondaryItems(secondaryItems: SecondaryModel[]) {
    this.secondaryItems.push(...secondaryItems);
    this.secondaryItemsChanged.next(this.secondaryItems.slice());
  }

  addOneSecondaryItem(secondaryItem: SecondaryModel) {
    this.secondaryItems.push(secondaryItem);
    this.secondaryItemsChanged.next(this.secondaryItems.slice());
  }

  updateSecondaryItem(index: number, newSecondaryItem: SecondaryModel) {
    this.secondaryItems[index] = newSecondaryItem;
    this.secondaryItemsChanged.next(this.secondaryItems.slice());
  }

  deleteSecondaryItem(index: number) {
    this.secondaryItems.splice(index, 1);
    this.secondaryItemsChanged.next(this.secondaryItems.slice());
  }

}
