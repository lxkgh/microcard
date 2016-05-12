package com.itbegin.outprojs.microcard.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.dao.UserRepositoryInterface;

@RestController
@RequestMapping("/api/login")
public class LoginApi {
	@Autowired
	private UserRepositoryInterface userRepositoryInterface;
	@RequestMapping(value = "/form", method = RequestMethod.POST)
	public String getSubForm(@PathVariable String username,@PathVariable String password){
		if(username =="123"){
			return "成功";			
		}
		return "失败";
	}
}
