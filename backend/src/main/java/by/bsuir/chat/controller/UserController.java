package by.bsuir.chat.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RequestMapping("/user")
@RestController
public class UserController {
    @GetMapping("/me")
    public Principal me(Principal principal) {
        return principal;
    }
}
