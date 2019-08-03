import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './Departments';

@Injectable({
  providedIn: 'root'
})
export class DepartService {
  http: HttpClient
  departments: Department[] = []
  constructor(http: HttpClient) {
    this.http = http;
  }

  fetched: boolean
  fetchDepartment() {
    this.http.get('./assets/department.json').subscribe(data => {
      if (!this.fetched) {
        this.convert(data);
        this.fetched = true;
      }
    }
    );
  }
  convert(data: any) {
    for (let o of data) {
      let e = new Department(o.dptId, o.dptName)
      this.departments.push(e);
    }
  }
  getDepartment(): Department[] {
    return this.departments;
  }
  delete(dptId: number) {
    {
      let foundIndex: number = -1;
      for (let i = 0; i < this.departments.length; i++) {
        let e = this.departments[i];
        if (dptId == e.dptId) {
          foundIndex = i;
          break;
        }
      }
      this.departments.splice(foundIndex, 1);
    }
  }
  add(d: Department) {
    this.departments.push(d);
  }

  update(data: any) {
    let dptId = data.dptId;
    let dptName = data.dptName;
    for (let i = 0; i < this.departments.length; i++) {
      let e = this.departments[i];
      if (dptId == e.dptId) {
        e.dptId = dptId;
        e.dptName = dptName;
      }
    }
  }
  search(deptId: number): Department[] {
    let resultDept: Department[] = [];
    let o: Department
    var flag = 0;
    for (let i = 0; i < this.departments.length; i++) {
      o = this.departments[i];
      console.log(o);
      if (deptId == o.dptId) {
        resultDept.push(o);
     //   alert(o.dptId + " " + o.dptName);
        flag = 1;
        console.log(flag);
      //  break;
      }
    }
    if (flag == 0)
      alert(deptId + "doesn't exists");
    return resultDept;
  }
}
