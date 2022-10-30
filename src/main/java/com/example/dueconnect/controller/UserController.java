package com.example.dueconnect.controller;

import com.example.dueconnect.model.User;
import com.example.dueconnect.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable("id") long userId){
        return userService.getUser(userId);
    }

    @GetMapping("/users")
    public List<User> GetAllUsers(){
        return userService.getAllUsers();
    }

}
