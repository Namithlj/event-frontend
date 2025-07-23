import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SignupComponent {
  name = '';
  email = '';
  mobile = '';
  pincode = '';
  password = '';

  constructor(private router: Router) {}

  onSignup() {
    if (this.name && this.email && this.mobile && this.pincode && this.password) {
      console.log('Signup data:', this.name, this.email, this.mobile, this.pincode, this.password);
      this.router.navigate(['/']); // redirect to login after signup
    } else {
      alert('Please fill in all fields!');
    }
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}
