import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators} from '@angular/forms'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  form:any;
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getAllEvents();
    this.form=new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      guestNo: new FormControl('',[Validators.required]),
      events: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required]),
    })
    this.form.valueChanges.subscribe((value: any) => {
      this.logValidationMessages();
    });
    
  }

  

send(){
  this.submitted=true;
  this.logValidationMessages();
  if(this.form.valid){
    console.log(this.form.value);
    this.http.post('http://localhost:3000/users/contact',this.form.value).subscribe((r:any)=>{
      console.log(r);
      Swal.fire('You have send Ypur Message')
      this.submitted=false;
      this.form.reset();
    })
    
  }else{
    this.logValidationMessages()
  }
}
AllEvents:any
getAllEvents(){
  this.http.get('http://localhost:3000/users/event').subscribe((r:any)=>{
    console.log(r);
    this.AllEvents=r;
  })
}
 validationMessages: any = {
    'name': {
      'required': 'name is required.',
    },
    'email': {
      'required': 'email  is required',
      'pattern':'pattern is required',
      
      
    },
    'guestNo':{
      'required': 'guestNo is required',
    },
  'events':{
    'required': 'events is required',
  },
'message':{
  'required': 'message is required',
}


  };

  formErrors: any = {
    'name':'',
    'email':'',
    'guestNo':'',
    'events':'',
    'message':''

  };
  submitted:boolean=false;
  logValidationMessages(group: FormGroup = this.form): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key)
;
      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid && (abstractControl.touched || this.submitted )) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }
      if (abstractControl instanceof FormGroup) {
        this.logValidationMessages(abstractControl);
      }
    });
  }

}
