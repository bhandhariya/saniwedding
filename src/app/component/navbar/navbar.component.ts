import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private storage: AngularFireStorage,

  ) { }

  ngOnInit(): void {
  }
  open(){
    alert('eorking')
  }
  upload(event){
    let AllFiles=[]
    let files = event.target.files;
  
    console.log(files.length);
    
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      let time= Date.now();
      const filePath = `wed/${time}`;
      const uploadTask  = this.storage.upload(filePath, element);
      const storageRef = this.storage.ref(filePath);
      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadURL => {
           AllFiles.push(downloadURL)
           
          });
        })
      ).subscribe();
      
            
    }
   
    console.log(AllFiles);
    
    
  }

}
