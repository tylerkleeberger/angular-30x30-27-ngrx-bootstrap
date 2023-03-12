import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryRoutingModule } from './secondary-routing.module';
import { SecondaryComponent } from './secondary/secondary.component';
import { SecondaryEditComponent } from './secondary-edit/secondary-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SecondaryComponent,
    SecondaryEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([ { path: '', component: SecondaryComponent } ]),
    SecondaryRoutingModule
  ]
})
export class SecondaryModule { }
