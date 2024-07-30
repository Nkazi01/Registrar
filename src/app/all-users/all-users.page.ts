import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.page.html',
  styleUrls: ['./all-users.page.scss'],
})
export class AllUsersPage implements OnInit {
  
  users = [
    { email: 'user1@example.com', staffNumber: '123', role: 'Admin' },
    { email: 'user2@example.com', staffNumber: '456', role: 'User' },
    // Add more users as needed
  ];

  constructor() { }

  ngOnInit() { }

}
