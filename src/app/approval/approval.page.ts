import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import Router

interface DocumentItem {
  email: string;
  documentName: string;
  approved: boolean;
  declined: boolean;
  suspended: boolean;
  comment: string;
}

@Component({
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
})
export class ApprovalPage implements OnInit {
  items: DocumentItem[] = [
    { email: 'user1@example.com', documentName: 'Document 1', approved: false, declined: false, suspended: false, comment: '' },
    { email: 'user2@example.com', documentName: 'Document 2', approved: false, declined: false, suspended: false, comment: '' },
    { email: 'user3@example.com', documentName: 'Document 3', approved: false, declined: false, suspended: false, comment: '' },
    { email: 'user4@example.com', documentName: 'Document 4', approved: false, declined: false, suspended: false, comment: '' },
    { email: 'user5@example.com', documentName: 'Document 5', approved: false, declined: false, suspended: false, comment: '' },
    { email: 'user6@example.com', documentName: 'Document 6', approved: false, declined: false, suspended: false, comment: '' },
    { email: 'user7@example.com', documentName: 'Document 7', approved: false, declined: false, suspended: false, comment: '' },
    { email: 'user8@example.com', documentName: 'Document 8', approved: false, declined: false, suspended: false, comment: '' },
    { email: 'user9@example.com', documentName: 'Document 9', approved: false, declined: false, suspended: false, comment: '' },
    { email: 'user10@example.com', documentName: 'Document 10', approved: false, declined: false, suspended: false, comment: '' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize any required data or services here
  }

  onCheckboxChange(item: DocumentItem, field: string) {
    if (field === 'approved') {
      item.declined = false;
      item.suspended = false;
    } else if (field === 'declined') {
      item.approved = false;
      item.suspended = false;
    } else if (field === 'suspended') {
      item.approved = false;
      item.declined = false;
    }
  }

  goBack() {
    this.router.navigate(['/previous-page']);  // Update this to your actual route
  }
}
