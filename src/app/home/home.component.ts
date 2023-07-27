import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
// import Router here into controuctor
  constructor(private router:Router){

  }

  navigate(){
    this.router.navigateByUrl("todoform");
  }
  navigate1(){
    this.router.navigateByUrl("todoList");
  }

}
