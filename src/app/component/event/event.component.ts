import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllEventse();
  }
  events:any;
  getAllEventse(){
    this.http.get('http://localhost:3000/users/event').subscribe((r:any)=>{
      this.events=r;
      console.log(this.events);
      
    })
  }
}
