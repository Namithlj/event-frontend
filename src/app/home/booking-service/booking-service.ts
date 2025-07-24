import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
 
  functionHallReviewLink = '';
  hotelReviewLink = '';
  cateringReviewLink = '';

  totalPrice = 0;
  constructor(private router: Router) {}
  selectedServiceDetails: { name: string; price: number }[] = [];

  availableHotels = [
    { name: 'Hotel A', pincode: '560101', price: 15000 },
    { name: 'Hotel B', pincode: '560102', price: 12000 }
  ];
  availableFunctionHalls = [
  { name: 'Function Hall A', pincode: '560101', price: 10000 },
  { name: 'Function Hall B', pincode: '560102', price: 12000 }
];
  availableCatering = [
    { name: 'Catering A', pincode: '560101', price: 8000 },
    { name: 'Catering B', pincode: '560104', price: 9500 }
  ];
  availableDecoration = [
    { name: 'Decoration A', pincode: '560101', price: 3000 },
    { name: 'Decoration B', pincode: '560103', price: 2800 }
  ];
  availablePhotography = [
    { name: 'Photography A', pincode: '560101', price: 4000 },
    { name: 'Photography B', pincode: '560105', price: 3500 }
  ];

  filteredHotels = [...this.availableHotels];
  filteredCatering = [...this.availableCatering];
  filteredDecoration = [...this.availableDecoration];
  filteredPhotography = [...this.availablePhotography];
  filteredFunctionHalls = [...this.availableFunctionHalls];

  filterNearestServices() {
    this.filteredFunctionHalls = this.filterByPincode(this.availableFunctionHalls);
    this.filteredHotels = this.filterByPincode(this.availableHotels);
    this.filteredCatering = this.filterByPincode(this.availableCatering);
    this.filteredDecoration = this.filterByPincode(this.availableDecoration);
    this.filteredPhotography = this.filterByPincode(this.availablePhotography);
  }

  filterByPincode(list: any[]) {
    const exactMatch = list.filter(item => item.pincode === this.pincode);
    if (exactMatch.length > 0) return exactMatch;
    return list; // fallback to all services if no exact match
  }


  onHotelChange() {
    if (this.selectedHotel) {
      this.hotelReviewLink = `https://www.google.com/search?q=${encodeURIComponent(this.selectedHotel.name)}+reviews`;
      this.addOrReplaceService('Hotel', this.selectedHotel.price);
    }
  }

  onCateringChange(event:any) {
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
    if (selected) {
      this.addOrReplaceService(serviceName, selected.price);
    }
  }

  addOrReplaceService(serviceName: string, price: number) {
    const existing = this.selectedServiceDetails.find(s => s.name === serviceName);
    if (existing) {
      existing.price = price;
    } else {
      this.selectedServiceDetails.push({ name: serviceName, price });
    }
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
    console.log('Booking submitted', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      pincode: this.pincode,
      eventDate: this.eventDate,
      services: this.selectedServiceDetails
    });
    alert('Booking Successful!');
    
      this.router.navigate(['/payment'], { queryParams: { amount: this.totalPrice } });
  }
}
