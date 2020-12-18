import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  get(url,isHeaderReq = false,header){
   return this.http.get(url,isHeaderReq && header)
  }

  post(url,data,isHeaderReq = false,header){
    return this.http.post(url,data,isHeaderReq && header)
   }
}
