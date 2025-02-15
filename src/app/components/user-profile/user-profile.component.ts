import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userEmail: string = "exampleEmail@mail.com"
  constructor() { }

  orders = [
    { name: 'hat1', quantity: 1, price: 19.99 },
    { name: 'jacket1', quantity: 2, price: 79.67 },
    { name: 'shoes1', quantity: 1, price: 69.75 },
  ]

  displayedColumns: string[] = ['name', 'quantity', 'price'];
  ngOnInit(): void {
  }

  changePassword() {
    alert("Password change")
  }
}
