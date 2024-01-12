import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manager } from './Manager';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  
  getManager()  //calling the api 
  {
    const url="http://localhost:8080/api/manager/show";
  return this.http.get(url);   // It is returning Json object

  }
update(m:Manager)
{
  const url="http://localhost:8080/api/manager/update/"+m.Id;
  var headers=new HttpHeaders({'Content-Type':'application/json'});
  return this.http.put(url,m,{headers});

}

delete(id:number){
  const url="http://localhost:8080/api/manager/delete/"+id;
  return this.http.delete(url);
}

create(model:Manager)
{
  const url="http://localhost:8080/api/manager/create";
  var headers=new HttpHeaders({'Content-Type':'application/json'});
  return this.http.post(url,model,{headers});
}
}
