package controller;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import model.Booking;
import model.ServiceDetails;
import service.BookingService;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:4200")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("/nearest")
    public Map<String, Object> getNearest(@RequestParam String pincode, @RequestParam String date) {
        boolean available = bookingService.isDateAvailable(date);

        Map<String, Object> response = new HashMap<>();
        if (!available) response.put("message", "Date not available, showing nearest available data");

        // Static service data (replace with DB queries later)
        response.put("hotels", new ServiceDetails[]{new ServiceDetails("Hotel A", 15000), new ServiceDetails("Hotel B", 12000)});
        response.put("functionHalls", new ServiceDetails[]{new ServiceDetails("Function Hall A", 10000), new ServiceDetails("Function Hall B", 12000)});
        response.put("catering", new ServiceDetails[]{new ServiceDetails("Catering A", 8000), new ServiceDetails("Catering B", 9500)});
        response.put("decoration", new ServiceDetails[]{new ServiceDetails("Decoration A", 3000), new ServiceDetails("Decoration B", 2800)});
        response.put("photography", new ServiceDetails[]{new ServiceDetails("Photography A", 4000), new ServiceDetails("Photography B", 3500)});
        return response;
    }

    @PostMapping
    public Booking saveBooking(@RequestBody Booking booking) {
        return bookingService.saveBooking(booking);
    }
}