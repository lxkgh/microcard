package com.itbegin.outprojs.microcard.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.dao.UserRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.User;

@RestController
public class UserApi {
	@Autowired
	private UserRepositoryInterface userRepositoryInterface;

	@RequestMapping(value = "/get/user", method = RequestMethod.GET)
	public User getUser() {
		return userRepositoryInterface.findOne("3");
	}

	@RequestMapping(value = "/add/user", method = RequestMethod.GET)
	public void addUser() {
		User u = new User();
		u.setId("3");
		u.setCount("testCount3");
		u.setPassword("123456");
		u.setName("曹勇政3");
		userRepositoryInterface.save(u);
	}

	@RequestMapping(value = "/edit/user", method = RequestMethod.GET)
	public String editUser() {
		userRepositoryInterface.unpdateName("3", "updatedName1");
		return "Success";
	}
}
