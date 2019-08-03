import { Component, OnInit } from '@angular/core';
import { DepartService } from '../depart.service';
import { Department } from '../Departments';

@Component({
  selector: 'app-dept-add',
  templateUrl: './dept-add.component.html',
  styleUrls: ['./dept-add.component.css']
})
export class DeptAddComponent implements OnInit {
service:DepartService
departments:Department
  constructor(service:DepartService) { 
    this.service= service;
  }

  ngOnInit() {
   
  }
  add(data:any)
  {
    this.departments = new Department(data.dptId,data.dptName);
    this.service.add(this.departments);
  }
  
}
