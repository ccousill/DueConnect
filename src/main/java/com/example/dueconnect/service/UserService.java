package com.example.dueconnect.service;

import com.example.dueconnect.model.User;

import java.util.List;

public interface UserService {
    User createUser(User user);

    User getUser(long userId);

    List<User> getAllUsers();

    boolean deleteUser(long userId);

    User updateUser(long userId, User user);
}
