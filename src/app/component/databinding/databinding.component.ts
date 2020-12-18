import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Employee } from 'src/app/model/Employee';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  @Input() titleMessage:string;

  title="WelcomeTo Bl"
  username:any;
  status:boolean=false;
  style="green";
  imgUrl="../assets/image/BL_logo_square_jpg.jpg"
  public textClass={
    "text-success":this.status,
    "text-success1":this.status,
}

textStyle={
  color:"blue",
  fontSize:"15px"
}


  constructor() { 
    console.log("Constructor Called")
  }

  ngOnChanges(change:SimpleChange){
    console.log("NgOnchange called"+change+""+this.titleMessage)
  }

  ngOnInit(): void {
    this.title="Hello WelCome"
    console.log("Ng Onit init Method called")
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

  method1(event){
    console.log("Event Binding"+event)
  }

}

// Interpolation {{}}
// Property Binding []  com-temp
//Event Binding ()     temp-com
//two way data binding [()]


