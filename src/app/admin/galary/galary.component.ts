import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/service/file-upload.service';
import Swal from 'sweetalert2';
import { FileUpload } from "../../component/navbar/fileuplad";
@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnInit {

  constructor(
    private uploadService: FileUploadService
  ) { }

  ngOnInit(): void {
  }

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
            if(percentage==100){
              Swal.fire('done','Your image Uploaded','success')
            }
          },
          error => {
            console.log(error);
          }
        );
      }
    }

  }

  reset(){
    this.percentage=0;
    this.selectedFiles=null;
  }
}
