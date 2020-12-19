import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from 'src/app/model/Employee';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL="/assets/json/employee.json";
  baseURL1:string = environment.employeeUrl

  constructor(private http:HttpClient,
    private httpService:HttpService) { }


   public get():Observable<any>{
     return this.http.get<any>(this.baseURL+"/employee")
    
   }

  public getData(id):Observable<any>{
    return this.http.get<any>(this.baseURL1+"/employee/getData/"+id);
  }

  public getData1():Observable<any>{
    return this.http.get<any>(this.baseURL1+"/employee/list");
  }

  // post(data):Observable<any>{
  //     return this.http.post(this.baseURL1+"/employee",data)
  // }
  put(id,data):Observable<any>{
    return this.http.put(this.baseURL1+"/employee/"+id,data)
}

post(data1):Observable<any>{
  let url=this.baseURL1+"/employee";
  let data=data1
  let token={
    headers: {
      'content-type': 'application/json', 
     // 'token':localStorage.getItem('token')
    }}
  return this.httpService.post(url,data,false,token)
}

delete(id):Observable<any>{
  let url=this.baseURL1+"/employee/"+id;
  let token={
    headers: {
      'content-type': 'application/json', 
     // 'token':localStorage.getItem('token')
    }}
  return this.httpService.delete(url,false,token)
}


}
