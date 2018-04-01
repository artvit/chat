package by.bsuir.chat.controller;

import by.bsuir.chat.domain.Message;
import by.bsuir.chat.repository.MessageRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.security.Principal;

@Controller
public class WebSocketController {
    private SimpMessagingTemplate template;
    private MessageRepository repository;

    public WebSocketController(SimpMessagingTemplate template, MessageRepository repository) {
        this.template = template;
        this.repository = repository;
    }

    @MessageMapping("/send/message")
    public void onReceivedMessage(String text, Principal user) {
        Message message = new Message();
        message.setText(text);
        message = repository.save(message);
        template.convertAndSend("/chat", message);
    }
}
