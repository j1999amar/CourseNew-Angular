import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {
   data:any=[]
   constructor(private api:ApiService){
    api.fetchData().subscribe(
      (response:any)=>{
        this.data=response;
      }
    )
   }
}
