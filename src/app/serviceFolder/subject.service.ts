import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  Id_data:any  = new BehaviorSubject<any>("");
  currentId:any = this.Id_data.asObservable();

  set(data:any){
    this.Id_data.next(data);
  }

  get(){
    return this.currentId;
  }
}
