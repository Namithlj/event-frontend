package model;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "bookings")
public class Booking {
    @Id
    private String id;

    private String name;
    private String email;
    private String phone;
    private String location;
    private String pincode;

    private String hotel;
    private String catering;
    private String functionHall;
    private List<ServiceDetails> services;

    private double totalPrice;
    private String bookingDate;   // store as string (e.g., "2025-07-25")

    public Booking() {}

    // Getters & Setters
 // Getters and Setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public String getPincode() {
        return pincode;
    }
    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getHotel() {
        return hotel;
    }
    public void setHotel(String hotel) {
        this.hotel = hotel;
    }

    public String getCatering() {
        return catering;
    }
    public void setCatering(String catering) {
        this.catering = catering;
    }

    public String getFunctionHall() {
        return functionHall;
    }
    public void setFunctionHall(String functionHall) {
        this.functionHall = functionHall;
    }

    public List<ServiceDetails> getServices() {
        return services;
    }
    public void setServices(List<ServiceDetails> services) {
        this.services = services;
    }

    public double getTotalPrice() {
        return totalPrice;
    }
    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getBookingDate() {
        return bookingDate;
    }
    public void setBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
    }

}