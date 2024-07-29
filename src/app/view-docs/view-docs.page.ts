import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-docs',
  templateUrl: './view-docs.page.html',
  styleUrls: ['./view-docs.page.scss'],
})
export class ViewDocsPage implements OnInit {
  activeTab: string = 'all';

  allDocuments = [
    { email: 'user1@example.com', name: 'Doc 1', status: 'Approved' },
    { email: 'user2@example.com', name: 'Doc 2', status: 'Declined' },
    { email: 'user3@example.com', name: 'Doc 3', status: 'Suspended' },
    // More documents...
  ];

  approvedDocuments = this.allDocuments.filter(doc => doc.status === 'Approved');
  declinedDocuments = this.allDocuments.filter(doc => doc.status === 'Declined');
  suspendedDocuments = this.allDocuments.filter(doc => doc.status === 'Suspended');

  allCount = this.allDocuments.length;
  approvedCount = this.approvedDocuments.length;
  declinedCount = this.declinedDocuments.length;
  suspendedCount = this.suspendedDocuments.length;

  constructor() { }

  ngOnInit() {
  }

  showDocuments(tab: string) {
    this.activeTab = tab;
  }

}
