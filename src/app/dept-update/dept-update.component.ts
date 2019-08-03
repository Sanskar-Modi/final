import { Component, OnInit } from '@angular/core';
import { DepartService } from '../depart.service';
import { Department } from '../Departments';

@Component({
  selector: 'app-dept-update',
  templateUrl: './dept-update.component.html',
  styleUrls: ['./dept-update.component.css']
})
export class DeptUpdateComponent implements OnInit {

  service:DepartService
  departments:Department
    constructor(service:DepartService) { 
      this.service= service;
    }
  
  ngOnInit() {
  }
update(data:any)
{
  this.service.update(data);
}
}
