package by.bsuir.chat.controller;

import by.bsuir.chat.domain.Message;
import by.bsuir.chat.repository.MessageRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;

@RequestMapping("/message")
@RestController
public class MessageController {

    private MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping("/history")
    public List<Message> historyMessages(@RequestParam LocalDateTime date, @RequestParam int size) {
        return this.messageRepository.findByDateTimeBefore(date, PageRequest.of(0, size));
    }
}
