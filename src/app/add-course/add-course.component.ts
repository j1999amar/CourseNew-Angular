import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  constructor(private api:ApiService,private route:Router ){}
  courseTitle=""
  courseDescription=""
  courseDate=""
  courseDuration=""
  courseVenue=""
  
  readValue=()=>{
    let data={
      "courseTitle":this.courseTitle,
      "courseDescription":this.courseDescription,
      "courseDuration":this.courseDuration ,
      "courseDate":this.courseDate,
      "courseVenue":this.courseVenue
     }
     console.log(data)
     this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Added Successfully")
          this.courseTitle=""
          this.courseDescription=""
          this.courseDuration=""
          this.courseDate=""
          this.courseVenue=""
        }else{
          alert("Something Went Wrong")
        }

      }
     )
     this.route.navigate(['/'])

  }

  

}
