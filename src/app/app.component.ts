import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './login/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private authorizationService: AuthorizationService,
  ) {}

  ngOnInit() {
      this.authorizationService.autoLogin();
  }
}
