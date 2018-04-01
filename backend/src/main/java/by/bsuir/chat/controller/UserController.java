package by.bsuir.chat.controller;

import by.bsuir.chat.controller.util.UserDetailsUtil;
import by.bsuir.chat.domain.User;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {
    @GetMapping("/me")
    public User me(OAuth2Authentication authentication) {
        return UserDetailsUtil.getUserFromAuthentication(authentication);
    }
}
