import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.page.html',
  styleUrls: ['upload.page.scss'],
})
export class UploadPage {
  @ViewChild('fileInput') fileInput!: ElementRef;

  selectedFile: File | null = null;
  selectedFiles: File[] = [];
  selectedFileNames: string[] = [];

  customDate: string = '';  // Property for custom date
  customModule: string = '';  // Property for custom module

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

  handleFiles(files: FileList) {
    this.selectedFiles = Array.from(files);
    this.selectedFileNames = this.selectedFiles.map(file => file.name);
    this.selectedFile = this.selectedFiles[0] || null;
    this.showError = false;
    console.log('Selected files:', this.selectedFiles);
  }

  submit() {
    if (!this.customDate || !this.customModule || !this.selectedFile) {
      this.errorMessage = 'Please fill in all fields and select a file.';
      this.showError = true;
      console.log(this.errorMessage);
      return;
    }

    this.showError = false;
    console.log('Submitting:', {
      customDate: this.customDate,  // Include customDate
      customModule: this.customModule,  // Include customModule
      file: this.selectedFile.name,
      allFiles: this.selectedFiles.map(f => f.name)
    });

    // Uncomment and use this if you have an upload service
    // this.uploadService.uploadFile(this.selectedFiles, this.customDate, this.customModule)
    //   .subscribe(response => {
    //     console.log('Upload successful', response);
    //   }, error => {
    //     console.error('Upload failed', error);
    //   });
  }
}
/*
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UploadService } from 'src/app/upload.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage {
  customDate: string = '';
  customModule: string = '';
  selectedFileNames: string[] = [];
  showError: boolean = false;
  errorMessage: string = '';

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private uploadService: UploadService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      this.selectedFileNames = [];
      for (let i = 0; i < input.files.length; i++) {
        this.selectedFileNames.push(input.files[i].name);
      }
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Add any visual feedback for the drag over event here
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Add any visual feedback for the drag leave event here
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files) {
      this.selectedFileNames = [];
      for (let i = 0; i < files.length; i++) {
        this.selectedFileNames.push(files[i].name);
      }
      const input = this.fileInput.nativeElement as HTMLInputElement;
      input.files = files;
    }
  }

  async submit() {
    const input = this.fileInput.nativeElement as HTMLInputElement;
    if (input && input.files && this.customDate && this.customModule) {
      for (let i = 0; i < input.files.length; i++) {
        await this.uploadService.uploadFile(input.files[i], this.customDate, this.customModule);
      }
      this.showError = false;
      this.errorMessage = '';
      this.clearFields(); // Clear input fields and file input
      this.showSuccessToast(); // Show success toast on successful upload
    } else {
      this.showError = true;
      this.errorMessage = 'Please fill in all fields and select at least one file.';
    }
  }

  private async showSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Files uploaded successfully!',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }

  private clearFields() {
    // Clear input fields
    this.customDate = '';
    this.customModule = '';
    
    // Clear file input
    const input = this.fileInput.nativeElement as HTMLInputElement;
    input.value = '';
    
    // Clear selected file names
    this.selectedFileNames = [];
  }
}
*/