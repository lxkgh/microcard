package com.itbegin.outprojs.microcard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.itbegin.outprojs.microcard.dao.UserRepositoryInterface;

@SpringBootApplication
public class App {
	@Autowired
	private static UserRepositoryInterface userRepositoryInterface;
	
	
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}
}
