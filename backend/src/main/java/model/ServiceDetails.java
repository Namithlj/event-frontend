package model;

public class ServiceDetails {
    private String name;
    private double price;

    public ServiceDetails() {}

    public ServiceDetails(String name, double price) {
        this.name = name;
        this.price = price;
    }

    // Getters & Setters
 // Getters and Setters
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
}
