import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
 public name="New project"
 public version:string[]=["angular js, angular 2,angular...13"]
 public yashu="input box"
 public imageUrl="https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2016/03/fall-trees-road-1.jpg "  
 public gift=" "
 public data=""
 constructor() { }

  ngOnInit(): void {
  }
  OnClick(){
    this.gift="Angular project";
  }
}
