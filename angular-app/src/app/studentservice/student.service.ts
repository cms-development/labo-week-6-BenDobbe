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

  constructor() {}

  public async getStudents<T>(): Promise<T> {
    try {
      const res = await axios.request<T>({
        method: 'get',
        url: this.studentUrl
      });
      return res.data;
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

  /*async getStudents(): Promise<Json> {
    try {
     const res = await axios.request<Json>({
       method: 'get',
       url: `${this.studentUrl}?sort=-created`,
     });

     return res.data;
    } catch (err) {
       console.log(err);
    }
  }*/

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
