import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.html',
  styleUrls: ['./payment.css']
})
export class Payment {
  paymentMethod = '';
  name = '';
  cardNumber = '';
  expiry = '';
  cvv = '';
  upiId = '';
  amount: number | null = null;

  onSubmit() {
    if (this.paymentMethod === 'card') {
      if (this.name && this.cardNumber && this.expiry && this.cvv && this.amount) {
        alert('Card Payment Successful!');
      } else {
        alert('Please fill all card details!');
      }
    } else if (this.paymentMethod === 'upi') {
      if (this.upiId && this.amount) {
        alert('UPI Payment Successful!');
      } else {
        alert('Please enter a valid UPI ID!');
      }
    } else {
      alert('Please select a payment method!');
    }
  }
}
