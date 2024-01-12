import { Component } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { response } from 'express';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  constructor(private httpService:HttpserviceService){}
  posts:any;

  ngOnInit()
  {
    this.httpService.getEmployee().subscribe(
      (response)=>{this.posts=response},
      (error)=>{console.log(error)}
    );
  }

}
