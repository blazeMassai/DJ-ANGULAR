import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8000/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.http.get(baseUrl, {params});
  }

  get(id: any) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: string) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }

}
