package com.itbegin.outprojs.microcard.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.dao.UserRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.User;
import com.itbegin.outprojs.microcard.model.json.ApiResult;

@RestController
public class UserApi {
	@Autowired
	private UserRepositoryInterface userRepositoryInterface;

	@RequestMapping(value = "/get/user", method = RequestMethod.GET)
	public User getUser() {
		return userRepositoryInterface.findOne("3");
	}
	
	@RequestMapping(value = "/add/user", method = RequestMethod.POST)
	public ApiResult addUser(@RequestBody User u) {
		try {
			User uu=userRepositoryInterface.save(u);
			return new ApiResult(true, 0, "添加用户成功", uu);
		} catch (Exception e) {
			return new ApiResult(false, 0, "添加用户失败", null);
		}
	}

	@RequestMapping(value = "/edit/user", method = RequestMethod.GET)
	public String editUser() {
		userRepositoryInterface.unpdateName("3", "updatedName1");
		return "Success";
	}
	@RequestMapping(value = "/get/userpage/{page}")
	public ApiResult getUserPage(@PathVariable int page){
		try {
			Page<User> userpage=userRepositoryInterface.findAll(new PageRequest(page, 10));
			return new ApiResult(true,userpage.getTotalPages(),"获取用户成功",userpage.getContent());
		} catch (Exception e) {
			return new ApiResult(false, 0, "获取用户失败", null);
		}
	}
}
