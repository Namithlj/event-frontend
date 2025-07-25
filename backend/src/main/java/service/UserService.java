package service;

import java.util.Optional;
import org.springframework.stereotype.Service;
import model.User;
import repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public User signup(User user) {
    	System.out.println(user);
        return userRepo.save(user);
    }

    public boolean login(String email, String password) {
        Optional<User> user = userRepo.findByEmail(email);
        return user.isPresent() && user.get().getPassword().equals(password);
    }
}
