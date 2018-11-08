import { Json } from './../Json';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from './../messageservice/message.service';
import { Student } from '../student';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public studentUrl = 'http://cmsdevdrupal.local/jsonapi/student/student';

  constructor() {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_student')}`;
}

async getStudents(): Promise<Json> {
  try {
   const res = await axios.request<Json>({
     method: 'get',
     url: `${this.studentUrl}?sort=-created`,
   });

   return res.data;
  } catch (err) {
     console.log(err);
  }
}

   // ADD
   async addStudent(student: Json): Promise<Student> {
    try {
      const res = await axios.request<Student>({
        method: 'post',
        url: this.studentUrl,
        data: student
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
}

   async getStudent(id: string): Promise<Json> {
    try {
       const res = await axios.request<Json>({
         method: 'get',
         url: `${this.studentUrl}/${id}`,
       });

       return res.data;
    } catch (err) {
       console.log(err);
    }
  }

 async updateStudent(student: Student): Promise<Student> {
   try {
     const res = await axios.request<Student>({
       method: 'patch',
       url: `${this.studentUrl}/${student.id}`,
       data: student
     });

     return res.data;
   } catch (err) {
     console.log(err);
   }
 }

  async deleteStudent(student: Student | string): Promise<Student> {
  try {
    const id = student;

    const res = await axios.request<Student>({
      method: 'delete',
      url: `${this.studentUrl}/${id}`
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
