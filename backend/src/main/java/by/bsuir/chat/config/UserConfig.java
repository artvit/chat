package by.bsuir.chat.config;

import by.bsuir.chat.controller.util.UserStorage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {
    @Bean
    UserStorage userStorage() {
        return new UserStorage(7);
    }
}
