package by.bsuir.chat.repository;

import by.bsuir.chat.domain.Message;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface MessageRepository extends MongoRepository<Message, String> {
    List<Message> findByDateTimeBefore(LocalDateTime dateTime, Pageable pageable);
}
