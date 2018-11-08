import { Json } from './../Json';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';

import { MessageService } from './../messageservice/message.service';
import { Course } from '../course';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  public courseUrl = 'http://cmsdevdrupal.local/jsonapi/course/course';

  constructor() { }

  public async getInstructors<T>(): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'get',
        url: this.courseUrl
      });
      return res.data;
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

 // ADD
 async addCourse(course: Json): Promise<Course> {
  try {
    const res = await axios.request<Course>({
      method: 'post',
      url: this.courseUrl,
      data: course
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

 async getcourse(id: string): Promise<Json> {
  try {
     const res = await axios.request<Json>({
       method: 'get',
       url: `${this.courseUrl}/${id}`,
     });

     return res.data;
  } catch (err) {
     console.log(err);
  }
}

async updateCourse(course: Course): Promise<Course> {
 try {
   const res = await axios.request<Course>({
     method: 'patch',
     url: `${this.courseUrl}/${course.id}`,
     data: course
   });

   return res.data;
 } catch (err) {
   console.log(err);
 }
}

async deleteCourse(course: Course | string): Promise<Course> {
try {
  const id = course;

  const res = await axios.request<Course>({
    method: 'delete',
    url: `${this.courseUrl}/${id}`
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


