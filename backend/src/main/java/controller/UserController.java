package controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;
import model.User;
import service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) { this.userService = userService; }

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
    	System.out.println(user);
        return userService.signup(user);
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> body) {
        boolean success = userService.login(body.get("email"), body.get("password"));
        return Map.of("success", success);
    }
}