import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([ { path: '', component: AuthorizationComponent } ]),
    SharedModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }
