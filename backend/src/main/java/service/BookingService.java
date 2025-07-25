package service;
import model.Booking;



import repository.BookingRepository;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    private final BookingRepository bookingRepo;

    public BookingService(BookingRepository bookingRepo) {
        this.bookingRepo = bookingRepo;
    }

    public Booking saveBooking(Booking booking) {
        return bookingRepo.save(booking);
    }

    public boolean isDateAvailable(String bookingDate) {
        return bookingRepo.findByBookingDate(bookingDate).isEmpty();
    }
}