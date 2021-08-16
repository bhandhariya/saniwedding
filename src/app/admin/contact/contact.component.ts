import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getContact();
  }
  Contact:any;
  getContact(){
    this.http.get('http://localhost:3000/users/contact').subscribe((r:any)=>{
      console.log(r);
      this.Contact=r;
      
    })
  }

}
