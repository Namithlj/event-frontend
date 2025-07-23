import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email && this.password) {
      console.log('Login success:', this.email, this.password);
      this.router.navigate(['/home']); // redirect to home page after login
    } else {
      alert('Please fill in all fields!');
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
