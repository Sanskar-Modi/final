import { Component, OnInit } from '@angular/core';
import { DepartService } from '../depart.service';
import { Department } from '../Departments';

@Component({
  selector: 'app-dept-search',
  templateUrl: './dept-search.component.html',
  styleUrls: ['./dept-search.component.css']
})
export class DeptSearchComponent implements OnInit {
service :DepartService;
departments:Department[]=[];
  constructor(service:DepartService) { 
    this.service = service;
  }

  ngOnInit() {
    this.service.fetchDepartment();
  }

search(data:any)
{
  let deptId:number = data.id;
  this.departments = this.service.search(deptId);
}
}
