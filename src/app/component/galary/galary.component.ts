import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }
photos:any;
  ngOnInit(): void {
    this.getAllphotos();
  }
  getAllphotos(){
    this.http.get('http://localhost:3000/users/gallary').subscribe((r:any)=>{
      this.photos=r;
      
    })
  }

}
