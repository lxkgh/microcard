package com.itbegin.outprojs.microcard.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private SecUserDetailsService secUserDetailsService;
	
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(secUserDetailsService);
	}
	
	protected void configure(HttpSecurity http) throws Exception {
		http
			.authorizeRequests()                                                              
				.antMatchers("/get/**", "/edit/**","/add/**").permitAll()                  
				.antMatchers("/test").hasAnyRole("USER","ADMIN")                                 
				.anyRequest().authenticated()
			.and()
			.formLogin();
	}

}


