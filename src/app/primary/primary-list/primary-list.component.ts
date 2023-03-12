import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PrimaryModel } from '../primary.model';
import { PrimaryService } from '../primary.service';

@Component({
  selector: 'app-primary-list',
  templateUrl: './primary-list.component.html',
  styleUrls: ['./primary-list.component.css']
})
export class PrimaryListComponent implements OnInit, OnDestroy{

  primaryItems: PrimaryModel[];
  subscription: Subscription;

  constructor(
    private primaryService: PrimaryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.primaryService.primaryItemsChanged.subscribe(
      (primaryItems: PrimaryModel[]) =>{
        this.primaryItems = primaryItems;
      }
    );
    this.primaryItems = this.primaryService.getAllPrimaryItems();
  }

  newPrimaryItem() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
