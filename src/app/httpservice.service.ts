import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) { }
  getEmployee(){
    const url="http://localhost:8080/api/employee/show";
    return this.http.get(url);
  }
}
