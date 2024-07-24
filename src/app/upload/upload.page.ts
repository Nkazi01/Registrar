import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.page.html',
  styleUrls: ['upload.page.scss'],
})
export class UploadPage {
  @ViewChild('fileInput') fileInput!: ElementRef; // Use the non-null assertion operator

  selectedFile: File | null = null;
  selectedDate: string = '';
  selectedModule: string = '';
  selectedFiles: File[] = [];

  constructor() {}

  handleFileInput(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files ? element.files[0] : null;
    if (file) {
      this.selectedFile = file;
      this.selectedFiles = [file];
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

  handleFiles(files: FileList) {
    this.selectedFiles = Array.from(files);
    this.selectedFile = this.selectedFiles[0] || null;
    console.log('Selected files:', this.selectedFiles);
  }

  submit() {
    if (!this.selectedFile || !this.selectedDate || !this.selectedModule) {
      console.log('Please fill in all fields and select a file.');
      return;
    }

    console.log('Submitting:', {
      date: this.selectedDate,
      module: this.selectedModule,
      file: this.selectedFile.name,
      allFiles: this.selectedFiles.map(f => f.name)
    });

    // Here you would typically send the data to a server
    // For example:
    // this.uploadService.uploadFile(this.selectedFiles, this.selectedDate, this.selectedModule)
    //   .subscribe(response => {
    //     console.log('Upload successful', response);
    //   }, error => {
    //     console.error('Upload failed', error);
    //   });
  }
}