import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DropdownDirective } from './dropdown.directive';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';
import { PlaceholderDirective } from './placeholder.directive';


@NgModule({
  declarations: [
    DropdownDirective,
    AlertComponent,
    LoadingComponent,
    PlaceholderDirective,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AlertComponent,
    LoadingComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class SharedModule { }
