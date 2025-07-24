import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-service.html',
  styleUrls: ['./booking-service.css']
})
export class BookingServiceComponent {
  name = '';
  email = '';
  phone = '';
  pincode = '';
  eventDate = '';

  selectedHotel: any;
  selectedCatering: any;
  selectedDecoration: any;
  selectedPhotography: any;
  selectedFunctionHall: any;

  hotelReviewLink = '';
  cateringReviewLink = '';
  functionHallReviewLink = '';

  totalPrice = 0;
  selectedServiceDetails: { name: string; price: number }[] = [];

  availableHotels: any[] = [];
  availableFunctionHalls: any[] = [];
  availableCatering: any[] = [];
  availableDecoration: any[] = [];
  availablePhotography: any[] = [];

  constructor(private router: Router, private bookingService: BookingService) {}

  filterNearestServices() {
    if (!this.pincode || !this.eventDate) {
      alert('Please enter event date and pincode');
      return;
    }

    this.bookingService.getNearestServices(this.pincode, this.eventDate)
      .subscribe((data: any) => {
        this.availableHotels = data.hotels;
        this.availableFunctionHalls = data.functionHalls;
        this.availableCatering = data.catering;
        this.availableDecoration = data.decoration;
        this.availablePhotography = data.photography;
        if (data.message) alert(data.message);
      });
  }

  onHotelChange() {
    if (this.selectedHotel) {
      this.hotelReviewLink = `https://www.google.com/search?q=${encodeURIComponent(this.selectedHotel.name)}+reviews`;
      this.addOrReplaceService('Hotel', this.selectedHotel.price);
    }
  }

  onCateringChange() {
    if (this.selectedCatering) {
      this.cateringReviewLink = `https://www.google.com/search?q=${encodeURIComponent(this.selectedCatering.name)}+reviews`;
      this.addOrReplaceService('Catering', this.selectedCatering.price);
    }
  }

  onFunctionHallChange() {
    if (this.selectedFunctionHall) {
      this.functionHallReviewLink = `https://www.google.com/search?q=${encodeURIComponent(this.selectedFunctionHall.name)}+reviews`;
      this.addOrReplaceService('Function Hall', this.selectedFunctionHall.price);
    }
  }

  onServiceDropdownChange(serviceName: string, selected: any) {
    if (selected) this.addOrReplaceService(serviceName, selected.price);
  }

  addOrReplaceService(serviceName: string, price: number) {
    const existing = this.selectedServiceDetails.find(s => s.name === serviceName);
    if (existing) existing.price = price;
    else this.selectedServiceDetails.push({ name: serviceName, price });
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.selectedServiceDetails.reduce((acc, s) => acc + s.price, 0);
  }

  onSubmit() {
    if (!this.eventDate || !this.selectedHotel || !this.selectedCatering) {
      alert('Please select date, hotel, and catering vendor.');
      return;
    }

    const bookingData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      pincode: this.pincode,
      eventDate: this.eventDate,
      services: this.selectedServiceDetails,
      totalPrice: this.totalPrice
    };

    this.bookingService.createBooking(bookingData).subscribe({
      next: () => {
        alert('Booking Successful!');
        this.router.navigate(['/payment'], { queryParams: { amount: this.totalPrice } });
      },
      error: () => alert('Failed to save booking. Try again!')
    });
  }
}
