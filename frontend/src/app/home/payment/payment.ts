import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { HttpClient } from '@angular/common/http';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class Payment implements OnInit {
  paymentMethod = '';
  name = '';
  cardNumber = '';
  expiry = '';
  cvv = '';
  upiId = '';
  amount: number | null = null;
  bookingId = '';

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.amount = Number(this.route.snapshot.queryParamMap.get('amount'));
    this.bookingId = this.route.snapshot.queryParamMap.get('bookingId') || '';
  }

  onSubmit() {
    if (!this.bookingId) {
      alert('Invalid Booking Reference');
      return;
    }
    if (!this.paymentMethod) {
      alert('Please select a payment method!');
      return;
    }

    // Call backend to create Razorpay order
    this.http
      .post<any>('http://localhost:8080/api/payments/create-order', { amount: this.amount })
      .subscribe({
        next: (order) => this.openRazorpay(order),
        error: () => alert('Failed to create payment order')
      });
  }

  openRazorpay(order: any) {
    const options = {
      key: order.key, // from backend
      amount: order.amount,
      currency: order.currency,
      name: 'Event Booking Payment',
      description: 'Booking ID: ' + this.bookingId,
      order_id: order.orderId,
      handler: (response: any) => {
        this.savePayment(response);
      },
      prefill: {
        name: this.name,
        email: 'test@example.com',
      },
      theme: { color: '#3399cc' }
    };
    const rzp = new Razorpay(options);
    rzp.open();
  }

  savePayment(response: any) {
    const paymentData = {
      bookingId: this.bookingId,
      method: this.paymentMethod,
      amount: this.amount,
      status: 'SUCCESS',
      transactionId: response.razorpay_payment_id
    };
    this.paymentService.pay(paymentData.bookingId, paymentData.method, paymentData.amount || 0)
      .subscribe({
        next: () => alert('Payment Successful & Saved!'),
        error: () => alert('Error saving payment')
      });
  }
}
