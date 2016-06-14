package com.itbegin.outprojs.microcard.api.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.config.security.MySecurityContext;
import com.itbegin.outprojs.microcard.dao.UserRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.User;
import com.itbegin.outprojs.microcard.model.json.ApiResult;
import com.itbegin.outprojs.microcard.utils.StrUtil;

@RestController
@RequestMapping("/api/user")
public class UserApi {
	
	@Autowired
	private UserRepositoryInterface userRepositoryInterface;
	@RequestMapping(method =RequestMethod.GET)
	public ApiResult getUsername(String username){
		try {
			if(StrUtil.isEmpty(username))	{
				return new ApiResult(false, 1, "手机号码为空", null);
			}
			User user =userRepositoryInterface.findByUsername(username);
			if(user == null){
				return new ApiResult(false, 1, "手机号码不存在", null);
			}
			user.setPassword("");
			return new ApiResult(true, 0, "获取手机成功", user);
		} catch (Exception e) {
			return new ApiResult(false, 1, "手机号码不存在", null);
		}
	}
	@RequestMapping(value = "/username",method = RequestMethod.PUT)
	public ApiResult updateUsername(@RequestBody User u){
		try {
			if (StrUtil.isEmpty(u.getUsername())) {
				return new ApiResult(false, 0, "修改手机失败，新手机不能为空", null);
			}
			if (!MySecurityContext.getUserDetails().getUser().getPassword().equals(u.getPassword())) {
				return new ApiResult(false, 0, "修改手机失败，密码不对", null);
			}
			userRepositoryInterface.updateUsername(MySecurityContext.getUserId(),u.getUsername());
			return new ApiResult(true, 0, "修改手机成功", null);
		} catch(DuplicateKeyException e){
			return new ApiResult(false, 0, "修改手机失败，手机号已存在", null);
		} catch (Exception e) {
			return new ApiResult(false, 1, "修改手机失败，未知异常", null);
		}
	}

	@RequestMapping(value = "/password",method = RequestMethod.PUT)
	public ApiResult updatePassword(@RequestBody User u){
		try {
			if (StrUtil.isEmpty(u.getNewPassword())) {
				return new ApiResult(false, 0, "修改密码失败，新密码不能为空", null);
			}
			if (!MySecurityContext.getUserDetails().getUser().getPassword().equals(u.getPassword())) {
				return new ApiResult(false, 0, "修改密码失败，旧密码不对", null);
			}
			userRepositoryInterface.updatePassword(MySecurityContext.getUserId(),u.getNewPassword());
			return new ApiResult(true, 0, "修改密码成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "修改密码失败，未知异常", null);
		}
	}
}
