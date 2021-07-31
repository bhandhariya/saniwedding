import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
  }
  open(){
    alert('eorking')
  }
  upload(event){
    let files = event.target.files;
  
    console.log(files.length);
    
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      let time= Date.now();
      const filePath = `wed/${time}`;
      const task = this.storage.upload(filePath, element);
     
            
    }
   
    
  }

}
