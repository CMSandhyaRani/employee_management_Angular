import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http:HttpClient) { }

  getEmployee(id:number)  //calling the api 
  {
    // const url="http://localhost:8080/api/employee/show";
    const url="http://localhost:8080/api/manager/find-employee-under-manager/"+id;
  return this.http.get(url);   // It is returning Json object

  }
  getEmployee2()  //calling the api 
  {
    const url="http://localhost:8080/api/employee/show";
    
  return this.http.get(url);   // It is returning Json object

  }
update(p:Employee)
{
  const url="http://localhost:8080/api/employee/update/"+p.Id;
  var headers=new HttpHeaders({'Content-Type':'application/json'});
  return this.http.put(url,p,{headers});

}

delete(id:number){
  const url="http://localhost:8080/api/employee/delete/"+id;
  return this.http.delete(url);
}

create(model:Employee)
{
  const url="http://localhost:8080/api/employee/create";
  var headers=new HttpHeaders({'Content-Type':'application/json'});
  return this.http.post(url,model,{headers});
}

getmanager(id:number){

  const url="http://localhost:8080/api/manager/find/"+id;
  return this.http.get(url);
}

assignmanager(managerid:number , empid:number){

  const url="http://localhost:8080/api/manager/assign/"+managerid+"/"+empid;
  var headers=new HttpHeaders({'Content-Type':'application/json', responseType:'text'});
  return this.http.post(url,{headers,'responseType':'text'});
}

managerlogin(email:string,password:string){
  const url="http://localhost:8080/api/managerlogin/search/"+email+"/"+password;
  var headers=new HttpHeaders({'Content-Type':'application/json', responseType:'text'});
  return this.http.get(url,{headers,'responseType':'text'});
}

x:any;
managersignup(model:Login){
  const url="http://localhost:8080/api/managerlogin/signup";
  var headers=new HttpHeaders({'Content-Type':'application/json', responseType:'text'});
 
  return this.http.post(url,model,{headers,'responseType':'text'});
}
}
