import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  animations: [
    trigger('cardsAnimation', [
      transition(':enter', [
        query('.card', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ])
      ])
    ])
  ]
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToWorkerRegistration() {
    this.router.navigate(['/worker-registration']);
  }

  goToBookingService() {
    this.router.navigate(['/booking-service']);
  }
}
