import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl= "http://localhost:3000/user";

  getUserDetails(){
    return this.http.get(this.baseUrl)
  }

  postUserDetails(data:any){
    return this.http.post(this.baseUrl, data)
  }

  deleteUserDetails(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`)
    
  }

  editUserDetails(data:any){

    return this.http.put(this.baseUrl, data)

  }

  getUserDetailsById(id:number){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  updateUserDetails(id:number, data:any){
    return this.http.put(`${this.baseUrl}/${id}`,data)
  }

}
