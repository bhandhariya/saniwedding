import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radha-people',
  templateUrl: './radha-people.component.html',
  styleUrls: ['./radha-people.component.css']
})
export class RadhaPeopleComponent implements OnInit {

  constructor(
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
    this.getmyPeople();
  }
  people:any;
  getmyPeople(){
    this.http.get('http://localhost:3000/users/familyfosradha').subscribe((r:any) => {
      console.log(r);
      this.people=r;
      
    })
  }
}
