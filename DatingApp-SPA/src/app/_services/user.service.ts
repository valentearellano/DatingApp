import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseurl + 'users');
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseurl + 'users/' + id);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseurl + 'users/' + id, user);
  }
}
