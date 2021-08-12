import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { FileUploadService } from "../../service/file-upload.service";
import { FileUpload } from "./fileuplad";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  EventForm:any;
  constructor(
    private storage: AngularFireStorage,
    private uploadService: FileUploadService

  ) { 
    this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate() + 7);
      this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();
  ngOnInit(): void {
    this.EventForm=new FormGroup({
    title:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    StartDate:new FormControl('',[Validators.required]),
    Enddate:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    pic:new FormControl('',[Validators.required]),
    })
  }
    

    
  uploadEvent(){
    this.uploadService.eventurl.subscribe((r:any)=>{
      this.EventForm.get('pic').setValue(r)
    })
    if(this.EventForm.valid){
      console.log(this.EventForm.value);
      this.uploadService.createEvent(this.EventForm.value).subscribe((result:any)=>{
        console.log(result);
        
      })
    }else{
      alert('please fill all the details');
    }
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
  uplaodEventImage(event:any){
    console.log(event.target.files);
    let file = event.target.files[0];
    this.uploadService.pushFileToStorageforevent(file);    
  }

}

