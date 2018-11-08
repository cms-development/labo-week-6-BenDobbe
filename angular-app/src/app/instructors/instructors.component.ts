import { Component, OnInit } from '@angular/core';
import { Json } from './../Json';
import { InstructorService } from './../instructorservice/intstructor.service';
import { Instructor } from './../instructor';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {
  public instructors: Instructor[];

  constructor(private instructorService: InstructorService) { }

  ngOnInit() {
    this.getInstructors();
  }

  public async getInstructors(): Promise<void> {
    try {
      const res = await this.instructorService.getInstructors<Json>();
      this.instructors = res.data;
      console.log(this.instructors);
    } catch ( error ) {
      console.error( error );
    }
  }
}
