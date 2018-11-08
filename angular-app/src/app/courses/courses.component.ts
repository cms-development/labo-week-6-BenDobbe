import { Component, OnInit } from '@angular/core';
import { Json } from './../Json';
import { CourseService } from './../courseservice/course.service';
import { Course } from './../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  public async getCourses(): Promise<void> {
    try {
      const res = await this.courseService.getInstructors<Json>();
      this.courses = res.data;
      console.log(this.courses);
    } catch ( error ) {
      console.error( error );
    }
  }

}
