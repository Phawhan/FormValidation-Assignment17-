import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataRegisterationService {
url:string=""
  constructor(private http : HttpClient) { 
    this.url=  "http://localhost:3000/users"
  }
  
  postDataFromService(FormData:any) : Observable<any>{
    return this.http.post<any>(this.url,FormData);
   }
  getAllUsersFromService(FormData:any) : Observable<any>{
    return this.http.get<any>(this.url);
   }
}