import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ManagerComponent } from './manager/manager.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    ManagerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'employee',component:EmployeeComponent},
      {path:'home',component:HomeComponent},
      {path:'manager',component:ManagerComponent},
      {path:'admin',component:AdminComponent},
      {path:'',redirectTo:'/home',pathMatch:'full'}
    ])
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
