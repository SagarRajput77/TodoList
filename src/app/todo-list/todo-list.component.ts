import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SubjectService } from '../serviceFolder/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private http:HttpClient,private ser:SubjectService,private rout:Router){
    this.getData();
  }

  todoData:any=[];

  // getting data from local json
  getData(){
    this.http.get("http://localhost:3000/data").subscribe((res)=>{
      this.todoData = res;
      console.log(this.todoData);
      
    });
  }

  // for delete the data from todo list
  onDel(data:any){
    this.http.delete("http://localhost:3000/data/"+data.id).subscribe(res=>console.log(res));
    this.getData();
  }
  
  // if we triger edit button and perticular data will be send into service(BehaviourSubject) and navigate form component.
  onEdit(data:any){
    this.ser.set(data);
    this.rout.navigateByUrl("todoform");
  }
}
