import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { ViewCourseComponent } from './view-course/view-course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http'
const myRouter:Routes=[{
  path:"",
  component:ViewCourseComponent
},
{
  path:"addCourse",
  component:AddCourseComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    ViewCourseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
