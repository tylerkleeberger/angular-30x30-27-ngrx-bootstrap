import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryRoutingModule } from './primary-routing.module';
import { PrimaryComponent } from './primary/primary.component';
import { PrimaryDetailComponent } from './primary-detail/primary-detail.component';
import { PrimaryEditComponent } from './primary-edit/primary-edit.component';
import { PrimaryListComponent } from './primary-list/primary-list.component';
import { PrimaryItemComponent } from './primary-list/primary-item/primary-item.component';
import { PrimaryStartComponent } from './primary-start/primary-start.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PrimaryComponent,
    PrimaryDetailComponent,
    PrimaryEditComponent,
    PrimaryListComponent,
    PrimaryItemComponent,
    PrimaryStartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    PrimaryRoutingModule
  ]
})
export class PrimaryModule { }
