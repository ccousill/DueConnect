package com.example.dueconnect.controller;

import com.example.dueconnect.model.User;
import com.example.dueconnect.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @DeleteMapping("users/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteUser(@PathVariable("id") long userId){
        boolean deleted = false;
        deleted = userService.deleteUser(userId);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @PutMapping("users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") long userId, @RequestBody User user){
        user = userService.updateUser(userId,user);
        return ResponseEntity.ok(user);

    }

}
