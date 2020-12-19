import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDemoComponent } from './component/user-demo/user-demo.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EmployeeComponent } from './component/employye/employee.component';
import { BindingComponent } from './binding/binding.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { combineLatest } from 'rxjs';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { AuthGuard } from 'src/service/auth.guard';
import { AuthguradGuard } from 'src/service/authgurad.guard';
import { HomeComponent } from './component/home/home.component';



const routes: Routes = [

  {path:"demo",component:UserDemoComponent},
  {path:"",component:HomeComponent,canActivate:[AuthguradGuard]},
  {path:"login",component:SignInComponent},
  {path:"data",component:DatabindingComponent},
  {path:"bind",component:BindingComponent},
  {path:"payrollform",component:AddEmployeeComponent,canActivate:[AuthguradGuard]},
  {path:"payrollform/:id",component:AddEmployeeComponent},
  // {path:"",component:EmployeeComponent,canActivate:[AuthguradGuard]},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// ng g c combineLatest
// ng g s http
//auth guard