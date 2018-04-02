package by.bsuir.chat.controller.util;

import by.bsuir.chat.domain.User;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class UserStorage {

    private int inactiveMinutes;
    private ConcurrentHashMap<User, LocalDateTime> map = new ConcurrentHashMap<>();

    public UserStorage(int inactiveMinutes) {
        this.inactiveMinutes = inactiveMinutes;
    }

    public List<User> getActiveUsers() {
        return map.entrySet().stream()
                .filter(entry -> entry.getValue().isAfter(LocalDateTime.now().minusMinutes(inactiveMinutes)))
                .map(Map.Entry::getKey).collect(Collectors.toList());
    }

    public void addOrUpdate(User user) {
        map.put(user, LocalDateTime.now());
    }
}
