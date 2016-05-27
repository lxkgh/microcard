package com.itbegin.outprojs.microcard.config;

import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

import com.itbegin.outprojs.microcard.config.security.WebSecurityConfig;

public class SecurityWebApplicationInitializer extends
		AbstractSecurityWebApplicationInitializer {
	protected Class<?>[] getRootConfigClasses() {
		return new Class[] { WebSecurityConfig.class };
	}
	

}
