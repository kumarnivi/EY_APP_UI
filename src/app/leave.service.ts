import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {

  selectedType: string = 'Leavs';

  private apiUrl = 'http://localhost:8080';
 

  // private apiUrl = 'https://ey-app-api.onrender.com'

  constructor(private http: HttpClient) {}


  submitLeave(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/applyleave`, formData);
  }

  getLeaveRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/records/:id`);
  }

  getAllRecords(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/getAllRecords`);
  }


  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/login`, data);
  }

  register(data: { username: string; email: string; password: string; role: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/register`, data);
  }


}
