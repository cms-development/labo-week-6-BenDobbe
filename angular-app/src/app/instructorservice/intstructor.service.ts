import { Json } from './../Json';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';

import { MessageService } from './../messageservice/message.service';
import { Instructor } from '../instructor';

import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class InstructorService {
  public instructorUrl = 'http://cmsdevdrupal.local/jsonapi/instructor/instructor';

  constructor() { }


  public async getInstructors<T>(): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'get',
        url: this.instructorUrl
      });
      return res.data;
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

 // ADD
 async addInstructor(instructor: Json): Promise<Instructor> {
  try {
    const res = await axios.request<Instructor>({
      method: 'post',
      url: this.instructorUrl,
      data: instructor
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

 async getinstructor(id: string): Promise<Json> {
  try {
     const res = await axios.request<Json>({
       method: 'get',
       url: `${this.instructorUrl}/${id}`,
     });

     return res.data;
  } catch (err) {
     console.log(err);
  }
}

async updateInstructor(instructor: Instructor): Promise<Instructor> {
 try {
   const res = await axios.request<Instructor>({
     method: 'patch',
     url: `${this.instructorUrl}/${instructor.id}`,
     data: instructor
   });

   return res.data;
 } catch (err) {
   console.log(err);
 }
}

async deleteInstructor(instructor: Instructor | string): Promise<Instructor> {
try {
  const id = instructor;

  const res = await axios.request<Instructor>({
    method: 'delete',
    url: `${this.instructorUrl}/${id}`
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

