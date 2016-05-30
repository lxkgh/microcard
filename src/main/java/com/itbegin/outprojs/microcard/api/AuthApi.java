package com.itbegin.outprojs.microcard.api;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.config.security.MySecurityContext;
import com.itbegin.outprojs.microcard.model.json.ApiResult;
import com.itbegin.outprojs.microcard.utils.StrUtil;

@RestController
@RequestMapping("/api/auth")
public class AuthApi {
	@RequestMapping(value="/islogined",method = RequestMethod.GET)
	public ApiResult isLogined(){
		String username=MySecurityContext.getUsername();
		if (StrUtil.isEmpty(username)) {
			return new ApiResult(false, 0, "用户还没登录", null);
		}
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("userId", MySecurityContext.getUserId());
		map.put("username", MySecurityContext.getUsername());
		map.put("authorities", MySecurityContext.getUserDetails().getAuthorities());
		return new ApiResult(true, 0, "用户已登录",map );
	}
}
