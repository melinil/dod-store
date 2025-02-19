import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false
  constructor(public authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn()
  }

  ngOnInit(): void {
  }

}
