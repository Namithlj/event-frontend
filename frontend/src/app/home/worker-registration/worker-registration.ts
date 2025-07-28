import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkerService } from '../../services/worker.service';

@Component({
  selector: 'app-worker-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './worker-registration.html',
  styleUrls: ['./worker-registration.css']
})
export class WorkerRegistrationComponent {
  worker = {
    name: '',
    phone: '',
    email: '',
    location: '',
    experience: '',
    serviceType: '',
    price: 0,
    priceBasis: ''
  };

  constructor(private router: Router, private workerService: WorkerService) {}

  onSubmit() {
    if (!this.worker.name || !this.worker.phone || !this.worker.serviceType) {
      alert('Please fill all required fields');
      return;
    }

    this.workerService.registerWorker(this.worker).subscribe({
      next: () => {
        alert('Worker Registered Successfully!');
        this.router.navigate(['/workers']);
      },
      error: () => alert('Failed to register worker. Please try again.')
    });
  }
}
