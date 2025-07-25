package model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "workers")
public class Worker {
    @Id
    private String id;

    private String serviceType;
    private String location;
    private Double price;

    // Additional
    private String cateringItems;
    private Integer cateringBoysCount;
    private String vehicleType;
    private Integer hallCapacity;
    private String decorationTheme;

    public Worker() {}

    // Getters & Setters
 // Getters and Setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getServiceType() {
        return serviceType;
    }
    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }

    public String getCateringItems() {
        return cateringItems;
    }
    public void setCateringItems(String cateringItems) {
        this.cateringItems = cateringItems;
    }

    public Integer getCateringBoysCount() {
        return cateringBoysCount;
    }
    public void setCateringBoysCount(Integer cateringBoysCount) {
        this.cateringBoysCount = cateringBoysCount;
    }

    public String getVehicleType() {
        return vehicleType;
    }
    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public Integer getHallCapacity() {
        return hallCapacity;
    }
    public void setHallCapacity(Integer hallCapacity) {
        this.hallCapacity = hallCapacity;
    }

    public String getDecorationTheme() {
        return decorationTheme;
    }
    public void setDecorationTheme(String decorationTheme) {
        this.decorationTheme = decorationTheme;
    }
}