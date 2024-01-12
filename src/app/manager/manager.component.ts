import { Component } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';
import { Employee } from '../Employee';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

  constructor(private httpService:ManagerService,private router: Router){}

  managerid=1;
  empid=1;
  posts:any;
  post3:any;
  model=new Employee(28,"Vivek","Singh","7/2/2001","22/3/2022","Delhi","CS",30000);
  
  ngOnInit()
  {
    this.httpService.getEmployee2().subscribe(
      (response)=>{this.posts=response},
      (error)=>{console.log(error)}
    );

  }

  update(id:number, first_name:string,last_name:string,date_of_birth:string,hire_date:string,address:string,department:string,salary:number)
{
  this.model=new Employee(id,first_name,last_name,date_of_birth,hire_date,address,department,salary);
  this.httpService.update(this.model).subscribe(
    (response)=>{this.posts=response}
  );
  this.httpService.getmanager(this.managerid).subscribe(
    (response)=>{this.post2=response}
    );
  // window.location.reload()
  
}

delete(id:number){
  this.httpService.delete(id).subscribe(
    (response)=>{this.posts=response}
  );

  // window.location.reload()
}

model2=new Employee(1,"Ritu","Rathee","27/11/1999","4/5/2020","New Delhi","IT",40000);

create(){
this.httpService.create(this.model2).subscribe(
  (response)=>{console.log(response)}
);
// this.httpService.assignmanager(this.managerid,this.empid).subscribe(
//   (response)=>{console.log(response)}
// );
// window.location.reload()
}

assignmanager(){
  this.httpService.assignmanager(this.managerid,this.empid).subscribe(
    (response)=>{console.log(response)}
  );
}

post2:any;
getmanager(){
  this.httpService.getmanager(this.managerid).subscribe(
  (response)=>{this.post2=response}
  );

  this.httpService.getEmployee(this.managerid).subscribe(
    (response)=>{this.posts=response},
    (error)=>{console.log(error)}
  );

}
}
