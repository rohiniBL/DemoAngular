import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<any>();

  employee = []
  addForm: FormGroup;
  parentMessage = "message from parent"
  myname:any;
  user:any[]=[
    {
      "id":1,"name":"Raj","salary":45000
    },
    {
      "id":2,"name":"Siya","salary":3300
    },
    {
      "id":3,"name":"Piya","salary":55000
    }
  ]


  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder) { }



  ngOnInit(): void {
     this.getEmployee()
  }

  getEmployee() {
    this.userService.getData1()
      .subscribe(response => {
        this.employee = response;
        this.messageEvent.emit(response.length)
        console.log("Response" + JSON.stringify( this.employee))
      },
        error => {
          console.log(error)
        }
      )
  }
  addEmployee(){
    this.router.navigateByUrl('payrollform')
  }

  updateEmployee(id){
    this.router.navigate(['payrollform',id])
  }

  deleteEmployee(id){
    console.log("Delete "+id)
    this.userService.delete(id)
      .subscribe(response => {
       console.log(response)
       this.getEmployee()
      },
        error => {
          console.log(error)
        }
      )
  }








}
