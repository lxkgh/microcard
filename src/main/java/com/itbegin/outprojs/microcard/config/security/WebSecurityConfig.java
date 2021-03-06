package com.itbegin.outprojs.microcard.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.itbegin.outprojs.microcard.model.enums.UserRole;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private SecUserDetailsService secUserDetailsService;
	@Autowired
	private MyAuthSuccessHandler myAuthSuccessHandler;
	@Autowired
	private MyAuthFailureHandler myAuthFailureHandler;
	@Autowired
	private MyLogoutSuccessHandler myLogoutSuccessHandler;
    
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(secUserDetailsService);
	}
	
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().exceptionHandling().accessDeniedPage("/admin")
		.and()
		.authorizeRequests()
		.antMatchers(HttpMethod.GET,"/app","/admin",
				"/api/init/*",
				"/api/auth/*",
				"/api/user",
				"/api/usercard")
		.permitAll()
		.antMatchers("/api/message/*").permitAll()
		.antMatchers("/api/admin/**").hasAuthority(UserRole.ROLE_ADMIN.toString())
		.anyRequest().authenticated()
		.and()
		.formLogin()
		.loginPage("/app")
		.usernameParameter("username")
		.passwordParameter("password")
		.loginProcessingUrl("/login")
		.successHandler(myAuthSuccessHandler)
		.failureHandler(myAuthFailureHandler)
		.permitAll()
		.and().logout()
		.logoutUrl("/logout")
		.logoutSuccessHandler(myLogoutSuccessHandler)
        .permitAll();
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
	  web.ignoring().antMatchers("/js/**","/css/**","/img/**");
	}

}


