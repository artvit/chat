package by.bsuir.chat.controller;

import by.bsuir.chat.domain.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RequestMapping("/user")
@RestController
public class UserController {
    @GetMapping("/me")
    public Principal me(Principal principal) {
        System.out.println(principal);
        return principal;
    }

    @GetMapping("/active")
    public List<User> active() {
        return null;
    }
}
