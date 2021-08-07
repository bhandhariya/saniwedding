import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from "../component/navbar/fileuplad";
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private basePath = '/photos';

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

  
}
