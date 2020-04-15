import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainee } from './trainee';
@Injectable({
  providedIn: 'root'
})
export class TraineeService {

 private trainee: Trainee[]=[];

  constructor(private http: HttpClient) {}


  loadtrainee():Observable<any>{
    return this.http.get("http://localhost:1130/gettrainer");
  }
  insertTrainee(trainee:Trainee):Observable<any>{
    //this.books.push(book);
    //const str=JSON.stringify(book);
    //console.log(str);
    return this.http.post("http://localhost:1130/trainer",trainee,{responseType:"text"});
  }
  updateTrainee(trainee:Trainee):Observable<any>
  {
    let end=trainee.traineeId;
    return this.http.put("http://localhost:1130/update/"+end,trainee);
  }
  deleteTrainee(id:number):Observable<any>
  {
    let endpoint=id;
    return this.http.delete("http://localhost:1130/delete/"+endpoint);
  }


}
