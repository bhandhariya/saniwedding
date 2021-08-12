import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from "../component/navbar/fileuplad";
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/photos';
  public eventurl = new BehaviorSubject(null);
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage,
    private http:HttpClient) { }
  pushFileToStorageforGalary(fileUpload: FileUpload): Observable<number | undefined> {
    let time = Date.now();
    const filePath = `${this.basePath}/${time}${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log(downloadURL);
          
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileDataforFalary(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileDataforFalary(fileUpload: FileUpload): void {
   console.log(fileUpload);
   let obj = {
     url: fileUpload.url
   }
   this.http.post('http://localhost:3000/users/gallary',obj).subscribe((res:any) => {
     console.log(res);
     
   })
    
  }
  pushFileToStorageforGalarya(fileUpload: FileUpload,family:any,name:any): Observable<number | undefined> {
    let time = Date.now();
    const filePath = `${this.basePath}/${time}${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log(downloadURL);
          
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileDataforfamily(fileUpload,family,name);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileDataforfamily(fileUpload: FileUpload,family:any,name:any): void {
    console.log(fileUpload);
    let obj = {
      url: fileUpload.url,
      family:family,
      name:name
    }
    console.log(obj);
    
    this.http.post('http://localhost:3000/users/family',obj).subscribe((res:any) => {
      console.log(res);
      
    })
     
   }

  //  private saveFileDataforevent(fileUpload: FileUpload,family:any,name:any): void {
  //   console.log(fileUpload);
  //   let obj = {
  //     url: fileUpload.url,
  //     family:family,
  //     name:name
  //   }
  //   console.log(obj);
    
  //   this.http.post('http://localhost:3000/users/family',obj).subscribe((res:any) => {
  //     console.log(res);
      
  //   })
     
  //  }
   pushFileToStorageforevent(fileUpload: FileUpload): Observable<number | undefined> {
     console.log(fileUpload);
     
    let time = Date.now();
    const filePath = `${this.basePath}/${time}${fileUpload.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          console.log(downloadURL);
          this.eventurl.next(downloadURL)
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }
  
}
