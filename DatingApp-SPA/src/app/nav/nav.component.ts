import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully.');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.alertify.message('Logged out.');
  }

}
