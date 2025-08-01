import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RazorpayOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
  key: string;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private baseUrl = 'https://event-backend-rp99.onrender.com/api/payments';

  constructor(private http: HttpClient) {}

  /**
   * Create Razorpay order from backend
   */
  createOrder(amount: number): Observable<RazorpayOrderResponse> {
    return this.http.post<RazorpayOrderResponse>(`${this.baseUrl}/create-order`, { amount });
  }

  /**
   * Save payment after success
   */
  pay(bookingId: string, paymentMethod: string, amount: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/pay`, {
      bookingId,
      method: paymentMethod,
      amount
    });
  }
}
