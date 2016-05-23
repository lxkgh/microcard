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
	
	@RequestMapping(value = "/edit/user", method = RequestMethod.GET)
	public String editUser() {
		userRepositoryInterface.updateUsername("3", "updatedName1");
		return "Success";
	}
}
