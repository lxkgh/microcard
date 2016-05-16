package com.itbegin.outprojs.microcard.api.admin;

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
@RequestMapping(value="/api/admin")
public class AdminUserApi {
	@Autowired
	private UserRepositoryInterface userRepositoryInterface;
	
	@RequestMapping(value = "/get/user/{username}",method = RequestMethod.GET)
	public ApiResult getUser(@PathVariable String username){
		try {
			User u = userRepositoryInterface.findByUsername(username);
			return new ApiResult(true, 0, "获取用户成功", u);
		} catch (Exception e) {
			return new ApiResult(false, 0, "获取用户失败", null);
		}
		
	}
	@RequestMapping(value = "/add/user", method = RequestMethod.POST)
	public ApiResult addUser(@RequestBody User u) {
		try {
			if (u.getPassword()==null||u.getPassword()=="") {
				u.setPassword("123456");
			}
			User uu=userRepositoryInterface.save(u);
			return new ApiResult(true, 0, "添加用户成功", uu);
		} catch (Exception e) {
			return new ApiResult(false, 0, "添加用户失败", null);
		}
	}
	
	@RequestMapping(value = "/put/user", method = RequestMethod.PUT)
	public ApiResult updateUser(@RequestBody User u){
		try {
			userRepositoryInterface.updateUser(u);
			return new ApiResult(true, 0, "修改用户成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "修改用户失败", null);
		}
	}
	
	@RequestMapping(value = "/delete/user/{username}", method = RequestMethod.DELETE)
	public ApiResult deleteUser(@PathVariable String username){
		try {
			userRepositoryInterface.deleteByUsername(username);
			return new ApiResult(true, 0, "删除用户成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "删除用户失败", null);
		}
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
