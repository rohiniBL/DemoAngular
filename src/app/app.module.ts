import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';   

import { AppComponent } from './app.component';
import { UserDemoComponent } from './component/user-demo/user-demo.component';

import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeComponent } from './component/employye/employee.component';
import { BindingComponent } from './binding/binding.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { AuthGuard } from 'src/service/auth.guard';
import { AuthguradGuard } from 'src/service/authgurad.guard';



@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    AddEmployeeComponent,
    BindingComponent,
    DatabindingComponent,
    SignInComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule
    
  
  ],
  providers: [UserService,AuthGuard,AuthguradGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }



