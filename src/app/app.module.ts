import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptAddComponent } from './dept-add/dept-add.component';
import { DeptUpdateComponent } from './dept-update/dept-update.component';
import { DeptSearchComponent } from './dept-search/dept-search.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { DepartService } from './depart.service';
import {FormsModule, NgModel} from '@angular/forms'
import { OrderBy } from './orderby';
@NgModule({
  declarations: [
    AppComponent,
    DeptListComponent,
    DeptAddComponent,
    DeptUpdateComponent,
    DeptSearchComponent,
    OrderBy
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [HttpClient,DepartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
