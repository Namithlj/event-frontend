import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './worker-registration.html',
  styleUrls: ['./worker-registration.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class WorkerRegistrationComponent {
  serviceType = '';
  location = '';
  price: number | null = null;

  // Additional fields
  cateringItems = '';
  cateringBoysCount: number | null = null;
  vehicleType = '';
  hallCapacity: number | null = null;
  decorationTheme = '';

  onSubmit() {
    const data = {
      serviceType: this.serviceType,
      location: this.location,
      price: this.price,
      cateringItems: this.cateringItems,
      cateringBoysCount: this.cateringBoysCount,
      vehicleType: this.vehicleType,
      hallCapacity: this.hallCapacity,
      decorationTheme: this.decorationTheme
    };
    console.log('Worker Registration:', data);
    alert('Worker Registered Successfully!');
  }
}
