package by.bsuir.chat.controller.util;

import by.bsuir.chat.domain.User;
import org.springframework.security.oauth2.provider.OAuth2Authentication;

import java.util.LinkedHashMap;

public class UserDetailsUtil {


    private class Details {
        private String name;
        private String picture;

        private Details() {
        }

        public String getName() {
            return name;
        }

        public String getPicture() {
            return picture;
        }
    }

    private UserDetailsUtil() {
    }


    public static User getUserFromAuthentication(OAuth2Authentication authentication) {
        LinkedHashMap map = (LinkedHashMap) authentication.getUserAuthentication().getDetails();
        String name = (String) map.get("name");
        String photoUrl = (String) map.get("picture");
        return new User(name, photoUrl);
    }
}
