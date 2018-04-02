package by.bsuir.chat.controller;

import by.bsuir.chat.controller.util.UserStorage;
import by.bsuir.chat.controller.util.UserDetailsUtil;
import by.bsuir.chat.domain.Message;
import by.bsuir.chat.domain.User;
import by.bsuir.chat.repository.MessageRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Controller;

import java.time.LocalDateTime;

@Controller
public class WebSocketController {
    private UserStorage userStorage;
    private SimpMessagingTemplate template;
    private MessageRepository repository;

    public WebSocketController(SimpMessagingTemplate template, MessageRepository repository, UserStorage userStorage) {
        this.template = template;
        this.repository = repository;
        this.userStorage = userStorage;
    }

    @MessageMapping("/send/message")
    public void onReceivedMessage(String text, OAuth2Authentication authentication) {
        Message message = new Message();
        message.setText(text);
        message.setDateTime(LocalDateTime.now());
        User user = UserDetailsUtil.getUserFromAuthentication(authentication);
        message.setAuthor(user);
        userStorage.addOrUpdate(user);
        message = repository.save(message);
        template.convertAndSend("/chat", message);
    }
}
