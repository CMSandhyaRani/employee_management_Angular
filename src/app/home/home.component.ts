import { Component } from '@angular/core';
import { Login } from '../Login';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private httpservice:ManagerService , private router:Router){}
  model=new Login("kanika","123");

  m:any;
  managerlogin(){
  
    this.httpservice.managerlogin(this.model.email, this.model.password).subscribe(

      (response :string)=>{this.m=response;
      if(this.m.indexOf("you are welcome")!=-1)
      this.router.navigate(['/manager']);
    else
    alert(this.m);
      }
    );
    
  }

  m2:any;
  managersignup(){
    this.httpservice.managersignup(this.model).subscribe(

      (response :string )=>{this.m2=response;
      
    alert(this.m2);
      }
    );
  }

  adminlogin(){
    if(this.model.email=="sandhya@gmail.com" && this.model.password=="sandhya")
    this.router.navigate(['/admin'])
  else
  alert("Invalid login")
  }
}
