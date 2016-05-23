package com.itbegin.outprojs.microcard.api.admin;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.dao.UserRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.User;
import com.itbegin.outprojs.microcard.model.json.ApiResult;

@RestController
@RequestMapping(value="/api/admin/user")
public class AdminUserApi {
	@Autowired
	private UserRepositoryInterface userRepositoryInterface;
	
	@RequestMapping(value = "/get/{username}",method = RequestMethod.GET)
	public ApiResult getUser(@PathVariable String username){
		try {
			User u = userRepositoryInterface.findByUsername(username);
			return new ApiResult(true, 0, "获取用户成功", u);
		} catch (Exception e) {
			return new ApiResult(false, 0, "获取用户失败", null);
		}
		
	}
	@RequestMapping(value = "/add", method = RequestMethod.POST)
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
	
	@RequestMapping(value = "/put", method = RequestMethod.PUT)
	public ApiResult updateUser(@RequestBody User u){
		try {
			userRepositoryInterface.updateUser(u);
			return new ApiResult(true, 0, "修改用户成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "修改用户失败", null);
		}
	}
	
	@RequestMapping(value = "/delete/{username}", method = RequestMethod.DELETE)
	public ApiResult deleteUser(@PathVariable String username){
		try {
			userRepositoryInterface.deleteByUsername(username);
			return new ApiResult(true, 0, "删除用户成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "删除用户失败", null);
		}
	}
	
	@RequestMapping(value = "/get/page")
	public ApiResult getUserPage(@Param("page") int page,@Param("pagesize") int pagesize){
		try {
			Page<User> userpage=userRepositoryInterface.findAll(new PageRequest(page, pagesize));
			Map<String,Object> datas=new HashMap<String,Object>();
			datas.put("totalPages",userpage.getTotalPages());
			datas.put("totalElems",userpage.getTotalElements());
			datas.put("datasize", userpage.getNumberOfElements());
			datas.put("data",userpage.getContent());
			return new ApiResult(true,userpage.getTotalPages(),"获取用户成功",datas);
		} catch (Exception e) {
			return new ApiResult(false, 0, "获取用户失败", null);
		}
	}
}
