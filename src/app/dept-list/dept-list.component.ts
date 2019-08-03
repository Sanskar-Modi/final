import { Component, OnInit } from '@angular/core';
import { DepartService } from '../depart.service';
import { Department } from '../Departments';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  service:DepartService
departments:Department[]=[];
  constructor(service:DepartService) { 
    this.service= service;
  }

  ngOnInit() {
    this.service.fetchDepartment();
    this.departments = this.service.getDepartment();
  }
  delete(dptId:number)
  {
    this.service.delete(dptId)
    this.departments = this.service.getDepartment();

  }

  //
  // id kept as default column
  //
  column:string="dptId"; 
  order:boolean=true;
  sort(column:string){
    //
    //if the click is for same column ,change the previous order
    // else order for ascending by default
    //  
    if(this.column==column )
    {
      this.order=!this.order;
    }else{
      this.order=true;
      this.column=column;
    }
  }
}
