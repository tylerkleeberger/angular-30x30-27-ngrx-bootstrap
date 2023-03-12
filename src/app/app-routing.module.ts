import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/primary', pathMatch: 'full' },
  {
    path: 'primary',
    loadChildren: () => 
      import('./primary/primary.module').then(m => m.PrimaryModule)
  },
  {
    path: 'secondary',
    loadChildren: () =>
      import('./secondary/secondary.module').then(m => m.SecondaryModule)
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./login/authorization.module').then(m => m.AuthorizationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
