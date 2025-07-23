import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

interface Service {
  name: string;
  type: string;
  price: number;
}

@Component({
  selector: 'app-booking-service',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-service.html',
  styleUrls: ['./booking-service.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BookingServiceComponent {
  name = '';
  email = '';
  phone = '';
  location = '';

  availableServices: Service[] = [
    { name: 'Function Hall', type: 'hall', price: 20000 },
    { name: 'Catering', type: 'catering', price: 15000 },
    { name: 'Catering Boys', type: 'catering-boys', price: 5000 },
    { name: 'Vehicle for Transport', type: 'vehicle', price: 3000 },
    { name: 'Decoration', type: 'decoration', price: 7000 }
  ];

  selectedServices: string[] = [];
  totalPrice = 0;

  onServiceChange(event: any, service: Service) {
    if (event.target.checked) {
      this.selectedServices.push(service.name);
      this.totalPrice += service.price;
    } else {
      const index = this.selectedServices.indexOf(service.name);
      if (index > -1) {
        this.selectedServices.splice(index, 1);
        this.totalPrice -= service.price;
      }
    }
  }

  onSubmit() {
    if (this.name && this.email && this.phone && this.location && this.selectedServices.length > 0) {
      console.log('Booking Details:', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        location: this.location,
        services: this.selectedServices,
        totalPrice: this.totalPrice
      });
      alert('Booking Successful! Proceed to Payment.');
    } else {
      alert('Please fill all details and select services!');
    }
  }
}
