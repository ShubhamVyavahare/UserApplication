package com.example.userserver.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.userserver.model.User;
import com.example.userserver.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	// create
	public User newUser(User newUser) {
		return repository.save(newUser);
	}

	// read
	public List<User> all() {
		return repository.findAll();
	}

	public User getCurrentUser(String email) {
		return repository.findById(email).get();
	}

	// update
	public User replaceUser(User newUser, String email) {

		return repository.findById(email).map(user -> {
			user.setFirstName(newUser.getFirstName());
			user.setLastName(newUser.getLastName());
			user.setAddress(newUser.getAddress());
			return repository.save(user);
		}).orElseGet(() -> {
			newUser.setEmail(email);
			return repository.save(newUser);
		});
	}

	// delete
	public void deleteUser(String email) {
		repository.deleteById(email);
	}

}
