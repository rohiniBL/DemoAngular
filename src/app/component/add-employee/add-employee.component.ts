import { Component, OnInit, Input, OnDestroy, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  id: any;
  edit: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {

    console.log("Constructor")
    this.id = this.route.snapshot.params.id;
    console.log("ID=====" + this.id)
    this.getEmployeeData(this.id);
  }

  @Input() childMessage: string;

  ngOnInit(): void {
    console.log("OnInit called")
    this.registerForm = this.formBuilder.group({
      id: [],
      fname: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(2)]],
      lname: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getErrorForFname() {
    return this.registerForm.get('fname').hasError('required') ? 'First Name Cannot be blank' :
      this.registerForm.get('fname').hasError('maxlength') ? 'First Name should be max 10 digit' :
        this.registerForm.get('fname').hasError('minlength') ? "Minimun 2 digit required" :
          '';
  }

  getErrorForLname() {
    return this.registerForm.get('lname').hasError('required') ? 'Last Name Cannot be blank' :
      this.registerForm.get('lname').hasError('maxlength') ? 'Last Name should be max 10 digit' :
        this.registerForm.get('lname').hasError('minlength') ? "Minimun 2 digit required" :
          '';
  }

  getErrorForEmail() {
    return this.registerForm.get('email').hasError('required') ? 'Email Cannot be blank' :
      this.registerForm.get('email').hasError('email') ? "Enter Valid Input" :
        '';
  }

  ngOnChanges(data: SimpleChange) {
    console.log(data)
    console.log("ngOnChanges called" + this.childMessage)
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }


  getEmployeeData(id) {
    this.userService.getData(id)
      .subscribe(
        data => {
          this.edit = true;
          this.registerForm.setValue(data);
        },
        error => {
          console.log(error)
        });

  }

  resetForm(){
    this.registerForm.reset();
  }

  cancel(){
    this.router.navigateByUrl('')
  }


  onSubmit() {
    console.log(this.registerForm.value)
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.edit != true) {
      this.userService.post(this.registerForm.value)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['']);

          },
          error => {
            console.log(error)
          });
    } else {
      this.updateEmployee()
    }
  }

  updateEmployee() {
    this.userService.put(this.id, this.registerForm.value)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['']);

        },
        error => {
          console.log(error)
        });
  }

}
