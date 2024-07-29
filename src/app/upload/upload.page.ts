import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.page.html',
  styleUrls: ['upload.page.scss'],
})
export class UploadPage {
  @ViewChild('fileInput') fileInput!: ElementRef;

  selectedFile: File | null = null;
  selectedDate: string = '';
  selectedModule: string = '';
  selectedFiles: File[] = [];
  selectedFileNames: string[] = [];
  
  showError: boolean = false;
  errorMessage: string = '';

  constructor() {}

  handleFileInput(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    if (file) {
      this.selectedFile = file;
      this.selectedFiles = [file];
      this.showError = false;
      console.log('File selected:', file.name);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.remove('drag-over');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.remove('drag-over');
    
    if (event.dataTransfer) {
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        this.handleFiles(files);
      }
    }
  }

  onFileSelected(event: Event) {
    const element = event.target as HTMLInputElement;
    if (element.files) {
      this.handleFiles(element.files);
    }
  }

// Update handleFiles method
handleFiles(files: FileList) {
  this.selectedFiles = Array.from(files);
  this.selectedFileNames = this.selectedFiles.map(file => file.name);
  this.selectedFile = this.selectedFiles[0] || null;
  this.showError = false;
  console.log('Selected files:', this.selectedFiles);
}
  submit() {
    if (!this.selectedFile || !this.selectedDate || !this.selectedModule) {
      this.errorMessage = 'Please fill in all fields and select a file.';
      this.showError = true;
      console.log(this.errorMessage);
      return;
    }

    this.showError = false;
    console.log('Submitting:', {
      date: this.selectedDate,
      module: this.selectedModule,
      file: this.selectedFile.name,
      allFiles: this.selectedFiles.map(f => f.name)
    });

    // this.uploadService.uploadFile(this.selectedFiles, this.selectedDate, this.selectedModule)
    //   .subscribe(response => {
    //     console.log('Upload successful', response);
    //   }, error => {
    //     console.error('Upload failed', error);
    //   });
  }
}
