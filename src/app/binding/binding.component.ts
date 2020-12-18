import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {



  title="hello";
  imageSrc="../assets/image/BL_logo_square_jpg.jpg";
  isDisbled:boolean=false;
  username:any;
  hasError:boolean=true;
  subclasses="textClass";
  public messageClasses={
    "textDanger":this.hasError,
    "textClass":this.hasError
  }

  public titleStyle={
    color:"pink",
    fontSize:"15px"

  }

  constructor() { }

  ngOnInit(): void {
  
  }

  method1(event){
    console.log("hiii"+event)
    this.title="Welcome To BL"
  }


}
