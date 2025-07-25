package repository;
import java.util.List;


import org.springframework.data.mongodb.repository.MongoRepository;
import model.Booking;

public interface BookingRepository extends MongoRepository<Booking, String> {
    List<Booking> findByBookingDate(String bookingDate);
}
