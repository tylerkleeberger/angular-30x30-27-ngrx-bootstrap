import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { AuthorizationService } from '../login/authorization.service';
import { PrimaryItemComponent } from '../primary/primary-list/primary-item/primary-item.component';
import { PrimaryModel } from '../primary/primary.model';
import { PrimaryService } from '../primary/primary.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private primaryService: PrimaryService,
    private authService: AuthorizationService
  ) { }


  storePrimaryItems() {
    const primaryItems = this.primaryService.getAllPrimaryItems();
    this.http.put(
      'https://ngrx-bootstrap-default-rtdb.firebaseio.com/primaryItems.json', primaryItems
    )
    .subscribe(response => {
      console.log(response);
    });
  }

  fetchPrimaryItems() {
    return this.http.get<PrimaryModel[]>('https://ngrx-bootstrap-default-rtdb.firebaseio.com/primaryItems.json')
      .pipe(map(primaryItems => {
        return primaryItems.map(primaryItem => {
          return {
            ...primaryItem,
            secondaryItems: primaryItem.secondaryItems ? primaryItem.secondaryItems : []
          };
        });
      }),
        tap(primaryItems => {
          this.primaryService.setPrimaryItems(primaryItems);
        })
      );
  }


}
