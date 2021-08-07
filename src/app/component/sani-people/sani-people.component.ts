import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sani-people',
  templateUrl: './sani-people.component.html',
  styleUrls: ['./sani-people.component.css']
})
export class SaniPeopleComponent implements OnInit {

  constructor(
    private http:HttpClient,
  ) { }
    people:any;
  ngOnInit(): void {
    this.getMyPeople();
  }
  getMyPeople(){
    this.http.get('http://localhost:3000/users/familyfosain').subscribe((r:any) => {
      console.log(r);
      this.people=r;
      
    })
  }
}
