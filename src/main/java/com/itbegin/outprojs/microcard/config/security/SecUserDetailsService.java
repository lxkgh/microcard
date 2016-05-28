package com.itbegin.outprojs.microcard.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.itbegin.outprojs.microcard.dao.UserRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.User;

@Component
public class SecUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepositoryInterface userRepositoryInterface;
	@Override
	public UserDetails loadUserByUsername(String username)
			throws UsernameNotFoundException {
		User user=userRepositoryInterface.findByUsername(username);
		if(user == null){
            throw new UsernameNotFoundException(username);
        }
        UserDetails details = new SecUserDetails(user);
        return details;
        
	}
}