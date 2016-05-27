package com.itbegin.outprojs.microcard.config.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.itbegin.outprojs.microcard.model.json.ApiResult;
import com.itbegin.outprojs.microcard.utils.ResponseUtil;

@Component
public class MyAuthSuccessHandler implements AuthenticationSuccessHandler {

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request,
			HttpServletResponse response, Authentication authentication)
			throws IOException, ServletException {
		ResponseUtil.writeJSON(response, new ApiResult(true, 0, "登录成功", "login"));
		
	}

}
