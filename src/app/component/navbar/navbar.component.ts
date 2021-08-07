import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { FileUploadService } from "../../service/file-upload.service";
import { FileUpload } from "./fileuplad";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private storage: AngularFireStorage,
    private uploadService: FileUploadService

  ) { }

  ngOnInit(): void {
  }

  // upload(event){
  //   let AllFiles=[]
  //   let files = event.target.files;
  
  //   console.log(files.length);
    
  //   for (let index = 0; index < files.length; index++) {
  //     const element = files[index];
  //     let time= Date.now();
  //     const filePath = `wed/${time}`;
  //     const uploadTask  = this.storage.upload(filePath, element);
  //     const storageRef = this.storage.ref(filePath);
  //     uploadTask.snapshotChanges().pipe(
  //       finalize(() => {
  //         storageRef.getDownloadURL().subscribe(downloadURL => {
  //          AllFiles.push(downloadURL)
           
  //         });
  //       })
  //     ).subscribe();
      
            
  //   }
   
  //   console.log(AllFiles);
    
    
  // }

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorageforGalary(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }

  }
  selectedFilesa?: FileList;
  currentFileUploada?: FileUpload;
  percentagea = 0;
  selectFilea(event: any): void {
    this.selectedFilesa = event.target.files;
  }
  family:any;
  name:any
  uploada(): void {
    if (this.selectedFilesa) {
      const file: File | null = this.selectedFilesa.item(0);
      this.selectedFilesa = undefined;

      if (file) {
        console.log(file);
        
        this.currentFileUploada = new FileUpload(file);
        this.uploadService.pushFileToStorageforGalarya(this.currentFileUploada,this.family,this.name).subscribe(
          percentage => {
            this.percentagea = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }

  }
}
