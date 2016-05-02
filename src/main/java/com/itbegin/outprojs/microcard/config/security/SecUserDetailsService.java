package com.itbegin.outprojs.microcard.config.security;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.itbegin.outprojs.microcard.dao.UserRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.User;
import com.itbegin.outprojs.microcard.model.enums.UserRole;

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

class SecUserDetails implements UserDetails{
	private static final long serialVersionUID = 4281452740887572006L;
	private User user;
	
	public SecUserDetails(User user) {
        this.setUser(user);
    }

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<SimpleGrantedAuthority> roleList=new ArrayList<SimpleGrantedAuthority>();
		if(user.getRole()==UserRole.ROLE_USER){
			roleList.add(new SimpleGrantedAuthority(UserRole.ROLE_USER.name()));
		}else if(user.getRole()==UserRole.ROLE_ADMIN){
			roleList.add(new SimpleGrantedAuthority(UserRole.ROLE_ADMIN.name()));
		}
		return roleList;
	}

	@Override
	public String getPassword() {
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		return user.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}