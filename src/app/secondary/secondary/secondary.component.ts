import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecondaryModel } from 'src/app/shared/secondary.model';
import { SecondaryService } from '../secondary.service';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent implements OnInit, OnDestroy{

secondaryItems: SecondaryModel[];
subscription: Subscription;

constructor(
  private secondaryService: SecondaryService,
) {}

ngOnInit() {
  this.secondaryItems = this.secondaryService.getAllSecondaryItems();
  this.subscription = this.secondaryService.secondaryItemsChanged.subscribe(
    (secondaryItems: SecondaryModel[]) => {
      this.secondaryItems = secondaryItems;
    }
  );
}

editSecondaryItem(index: number) {
  this.secondaryService.startedEditing.next(index);
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
