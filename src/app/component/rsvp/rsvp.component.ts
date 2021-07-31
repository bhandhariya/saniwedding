import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  form:any;
  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      guestNo: new FormControl('',[Validators.required]),
      events: new FormControl('',[Validators.required]),
      message: new FormControl('',[Validators.required]),
    })
    
  }

send(){
  if(this.form.valid){
    console.log(this.form.value);
    this.form.reset();
  }else{
    alert('all field are mendatory')
  }
  
  
}

}
