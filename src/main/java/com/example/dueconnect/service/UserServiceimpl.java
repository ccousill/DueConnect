package com.example.dueconnect.service;

import com.example.dueconnect.exception.ResourceNotFoundException;
import com.example.dueconnect.model.User;
import com.example.dueconnect.repo.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceimpl implements UserService{

    private UserRepo userRepo;

    public UserServiceimpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User createUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public User getUser(long userId) {
        return userRepo.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User","Id",userId));
    }

    @Override
    public List<User> getAllUsers() {
        List<User> userEntities = userRepo.findAll();
        List<User> users = userEntities.stream().map(user -> new User(user.getId(),user.getFirstName(),user.getLastName(),user.getEmail())).collect(Collectors.toList());
            return users;
    }

    @Override
    public boolean deleteUser(long userId) {
        User user = userRepo.findById(userId).get();
        userRepo.delete(user);
        return true;
    }

    @Override
    public User updateUser(long userId, User user) {
        User userEntity = userRepo.findById(userId).get();
        userEntity.setEmail(user.getEmail());
        userEntity.setFirstName(user.getFirstName());
        userEntity.setLastName(user.getLastName());
        userRepo.save(userEntity);
        return user;
    }

}
