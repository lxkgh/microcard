package com.itbegin.outprojs.microcard.config.security;

import org.springframework.security.core.context.SecurityContextHolder;

public class MySecurityContext {
	public static SecUserDetails getUserDetails(){
		try{
			Object principal = SecurityContextHolder.getContext().
				getAuthentication().getPrincipal();
			return (principal instanceof SecUserDetails)?
					(SecUserDetails)principal:null;
		}catch(Exception ex){
			return null;
		}
	}
	
	public static String getUsername(){
		SecUserDetails user = getUserDetails();
		return (user!=null)?user.getUsername():null;
	}
}
