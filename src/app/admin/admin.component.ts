import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Manager } from '../Manager';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private httpService:AdminService, private router:Router){}
  posts:any;
  model:any;
 //model2:any;

  ngOnInit()            // this method is called by default as our webpage gets loaded in browser
{
this.httpService.getManager().subscribe(       // here we have called our service class's getProduct method
  (response)=>{this.posts=response},          // service class's getProduct method will return json object ->this we will get in response variable and response variable will store it in posts variable 
  (error)=>{console.log(error)}
);
}

update(id:number, name:string, address:string,department:string)
{
  this.model=new Manager(id,name,address,department);
  this.httpService.update(this.model).subscribe(
    (response)=>{this.posts=response}
  );
  window.location.reload()
  
}

delete(id:number){
  this.httpService.delete(id).subscribe(
    (response)=>{this.posts=response}
  );

  // window.location.reload()
}

model2=new Manager(1,"Sandhya","Delhi", "IT");

create(){
this.httpService.create(this.model2).subscribe(
  (response)=>{console.log(response)}
);
window.location.reload()
}
}
