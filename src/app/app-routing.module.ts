import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeptAddComponent } from './dept-add/dept-add.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptUpdateComponent } from './dept-update/dept-update.component';
import { DeptSearchComponent } from './dept-search/dept-search.component';


const routes: Routes = [
  {
    path:"dept-list",
    component:DeptListComponent
  },
  {
    path:"dept-add",
    component:DeptAddComponent
  },
  {
    path:"dept-update",
    component:DeptUpdateComponent
  },
  
    {
      path:"dept-search",
      component:DeptSearchComponent
    }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
