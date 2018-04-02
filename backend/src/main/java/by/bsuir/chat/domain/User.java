package by.bsuir.chat.domain;

import java.util.Objects;

public class User {
    private String name;
    private String photoUrl;

    public User() {
    }

    public User(String name, String photoUrl) {
        this.name = name;
        this.photoUrl = photoUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(name, user.name) &&
                Objects.equals(photoUrl, user.photoUrl);
    }

    @Override
    public int hashCode() {

        return Objects.hash(name, photoUrl);
    }
}
