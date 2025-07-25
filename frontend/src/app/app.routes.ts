import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { SignupComponent } from './auth/signup/signup';
 import { HomeComponent } from './home/home';
 import { WorkerRegistrationComponent } from './home/worker-registration/worker-registration';
import { BookingServiceComponent } from './home/booking-service/booking-service';
import { Payment} from './home/payment/payment';

export const routes: Routes = [
  { path: '', component: LoginComponent,data:{Animation:'LoginPage'} },
  { path: 'signup', component: SignupComponent,data:{Animation:'SignupPage'} },
  { path: 'home', component: HomeComponent },
  { path: 'worker-registration', component: WorkerRegistrationComponent,data: { animation: 'WorkerPage' } },
  { path: 'booking-service', component: BookingServiceComponent,data: { animation: 'BookingPage' }  },
  { path: 'payment', component: Payment,data: { animation: 'payment'} },
  { path: '**', redirectTo: '' }
];
