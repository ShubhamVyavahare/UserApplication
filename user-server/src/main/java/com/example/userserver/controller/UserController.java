package com.example.userserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.userserver.model.User;
import com.example.userserver.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping("")
	public List<User> all() {
		return service.all();
	}

	@GetMapping("/current-user/{email}")
	public User getCurrentUser(@PathVariable String email) {
		return service.getCurrentUser(email);
	}

	@PostMapping("/create-user")
	public User newUser(@RequestBody User newUser) {
		return service.newUser(newUser);
	}

	@DeleteMapping("/delete-user/{email}")
	public void deleteUser(@PathVariable String email) {
		service.deleteUser(email);
	}

	@PutMapping("/update-user/{email}")
	public User replaceUser(@RequestBody User newUser, @PathVariable String email) {

		return service.replaceUser(newUser, email);
	}
}
