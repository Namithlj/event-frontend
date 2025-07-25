import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkerService } from '../../services/worker.service';
@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './worker-registration.html',
  styleUrls: ['./worker-registration.css']
})
export class WorkerRegistrationComponent {
  serviceType = '';
  location = '';
  price: number | null = null;
  cateringItems = '';
  cateringBoysCount: number | null = null;
  vehicleType = '';
  hallCapacity: number | null = null;
  decorationTheme = '';

  constructor(private workerService: WorkerService) {}

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

    this.workerService.registerWorker(data).subscribe(() => {
      alert('Worker Registered Successfully!');
    });
  }
}
