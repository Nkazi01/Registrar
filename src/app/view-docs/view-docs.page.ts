import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-docs',
  templateUrl: './view-docs.page.html',
  styleUrls: ['./view-docs.page.scss'],
})
export class ViewDocsPage implements OnInit {
  activeTab: string = 'all';

  allDocuments = [
    { email: 'user1@example.com', name: 'Doc 1', status: 'Approved'},
    { email: 'user2@example.com', name: 'Doc 2', status: 'Declined'},
    { email: 'user3@example.com', name: 'Doc 3', status: 'Suspended'},
    { email: 'user4@example.com', name: 'Doc 4', status: 'Suspended'},
    { email: 'user5@example.com', name: 'Doc 5', status: 'Approved'},
    { email: 'user6@example.com', name: 'Doc 6', status: 'Declined'},


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

  selectedDocumentType: string = 'all'; // Initialize to 'all' or whichever you want to be default

showDocument(type: string): void {
  this.selectedDocumentType = type;
  // Add your logic to display documents based on the selected type
}

  showDocuments(tab: string) {
    this.activeTab = tab;
  }

// Define a variable to store the selected document
selectedDocument: any;

// Method to select a row
selectRow(doc: any) {
    this.selectedDocument = doc;
}

// Method to check if a row is selected
isSelected(doc: any): boolean {
    return this.selectedDocument === doc;
}

}
