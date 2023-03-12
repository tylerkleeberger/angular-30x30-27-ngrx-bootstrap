import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryService } from '../secondary/secondary.service';
import { PrimaryService } from '../primary/primary.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../login/auth-interceptor.service';



@NgModule({
  providers: [
    SecondaryService,
    PrimaryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
