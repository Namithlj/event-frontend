import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  name = '';
  email = '';
  mobile = '';
  pincode = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSignup() {
    const data = { name: this.name, email: this.email, mobile: this.mobile, pincode: this.pincode, password: this.password };
    console.log(data);
    this.authService.signup(data).subscribe({next:() => {
      alert('Signup successful!');
      this.router.navigate(['/']);
    },error: (err) => {
      console.error('Signup error:', err);
      alert('Signup failed! Please try again.');
    }
  
  });
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}
