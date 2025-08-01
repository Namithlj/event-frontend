import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private baseUrl = 'https://event-backend-rp99.onrender.com/api/bookings';

  constructor(private http: HttpClient) {}

  getNearestServices(pincode: string, eventDate: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/nearest?pincode=${pincode}&date=${eventDate}`);
  }

  searchCustomService(query: string, pincode: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?query=${query}&pincode=${pincode}`);
  }

  createBooking(bookingData: any): Observable<any> {
    return this.http.post(this.baseUrl, bookingData);
  }
}
