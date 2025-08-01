import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'https://event-backend-rp99.onrender.com';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }).pipe(map((res: any) => res.success));
  }

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userData);
  }
}
