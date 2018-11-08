import { StudentService } from './../studentservice/student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { Json } from './../Json';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {
  public students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
    console.log(this.students);
  }

  public async getStudents(): Promise<void> {
    try {
      const res = await this.studentService.getStudents<Json>();
      this.students = res.data;

    } catch ( error ) {
      console.error( error );
    }
  }
}
