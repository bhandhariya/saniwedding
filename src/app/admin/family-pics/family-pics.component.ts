import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileUploadService } from 'src/app/service/file-upload.service';
import { FileUpload } from "../../component/navbar/fileuplad";

@Component({
  selector: 'app-family-pics',
  templateUrl: './family-pics.component.html',
  styleUrls: ['./family-pics.component.css']
})
export class FamilyPicsComponent implements OnInit {

  constructor(
    private uploadService: FileUploadService

  ) { }
    form:any;
  ngOnInit(): void {
    this.form=new FormGroup({
      name:new FormControl(''),
      family:new FormControl(''),
 
    })
  }
  selectedFilesa?: FileList;
  currentFileUploada?: FileUpload;
  percentagea = 0;
  selectFilea(event: any): void {
    this.selectedFilesa = event.target.files;
  }

  uploada(): void {
    if (this.selectedFilesa) {
      const file: File | null = this.selectedFilesa.item(0);
      this.selectedFilesa = undefined;

      if (file) {
        console.log(file);
        
        this.currentFileUploada = new FileUpload(file);
        console.log(this.currentFileUploada);
        console.log(this.form.value);
        
        
        this.uploadService.pushFileToStorageforGalarya2(this.currentFileUploada,this.form.value).subscribe(
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
