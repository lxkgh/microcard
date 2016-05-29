package com.itbegin.outprojs.microcard.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.dao.UserRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.User;
import com.itbegin.outprojs.microcard.model.enums.UserRole;
import com.itbegin.outprojs.microcard.model.json.ApiResult;

@RestController
@RequestMapping("/api/init")
public class InitApi {
	@Autowired
	private UserRepositoryInterface userRepositoryInterface;

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public ApiResult getUser() {
		long number=userRepositoryInterface.countByRoleLike(UserRole.ROLE_ADMIN);
		if (number==0) {
			User u=new User();
			u.setUsername("user");
			u.setRealname("user");
			u.setPassword("123456");
			u.setRole(UserRole.ROLE_ADMIN);
			userRepositoryInterface.save(u);
			return new ApiResult(true, 0, "初始化用户成功", number);
		}
		return new ApiResult(false, 0, "初始化用户失败", number);
	}

}
