import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/service/file-upload.service';
import Swal from 'sweetalert2';
import { FileUpload } from "../../component/navbar/fileuplad";
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(
    private uploadService: FileUploadService
  ) {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
   }

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

  EventForm:any;
  selectedFilesa?: FileList;
  currentFileUploada?: FileUpload;
  eventPercentege=0;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();

  uploadEventImage(event: any): void {
    if (event.target.files) {
      const file: File | null = event.target.files.item(0);
      event.target.files = undefined;

      if (file) {
        console.log(file);
        
        this.currentFileUploada = new FileUpload(file);
        this.uploadService.pushFileToStorageforEvents2(this.currentFileUploada).subscribe(
          percentage => {
            this.eventPercentege = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
          
        );
      }
    }

  }

  uploadEvent(){
    this.uploadService.eventurl.subscribe((r:any)=>{
      console.log(r);
      
      this.EventForm.get('pic').setValue(r)
    })
    if(this.EventForm.valid){
      console.log(this.EventForm.value);
      this.uploadService.createEvent(this.EventForm.value).subscribe((result:any)=>{
        console.log(result);
      Swal.fire('uploaded');
      this.EventForm.reset();
        
      })
    }else{
      alert('please fill all the details');
      console.log(this.EventForm.value);
      
    }
  }


}
