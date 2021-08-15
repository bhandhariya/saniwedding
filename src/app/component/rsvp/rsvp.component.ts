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
    this.http.post('http://localhost:3000/users/contact',this.form.value).subscribe((r:any)=>{
      console.log(r);
      Swal.fire('You have send Ypur Message')
      this.form.reset();
    })
    
  }else{
    alert('all field are mendatory')
  }
}
AllEvents:any
getAllEvents(){
  this.http.get('http://localhost:3000/users/event').subscribe((r:any)=>{
    console.log(r);
    this.AllEvents=r;
  })
}

}
