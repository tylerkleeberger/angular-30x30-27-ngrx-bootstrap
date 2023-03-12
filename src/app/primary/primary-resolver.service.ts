import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { PrimaryService } from './primary.service';

@Injectable({
  providedIn: 'root'
})
export class PrimaryResolverService {

  constructor(
    private dataStorageService: DataStorageService,
    private primaryService: PrimaryService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const primaryItems = this.primaryService.getAllPrimaryItems();

    if(primaryItems.length === 0) {
      return this.dataStorageService.fetchPrimaryItems();
    } else {
      return primaryItems
    }
  }
}
