import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.url);
  }

  saveUser(data) {
    return this.http.post(`${this.url}/create-user`, data);
  }

  deleteUser(email) {
    return this.http.delete(`${this.url}/delete-user/${email}`);
  }

  getCurrentUser(email) {
    return this.http.get(`${this.url}/current-user/${email}`);
  }

  updateUser(email, data) {
    return this.http.put(`${this.url}/update-user/${email}`, data);
  }
}
