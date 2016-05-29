package com.itbegin.outprojs.microcard.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.itbegin.outprojs.microcard.dao.repository.UserRepositoryInterfaceCustom;
import com.itbegin.outprojs.microcard.model.entity.User;
import com.itbegin.outprojs.microcard.model.enums.UserRole;

public interface UserRepositoryInterface extends MongoRepository<User, String>,
		UserRepositoryInterfaceCustom {
	
	User findByUsername(String username);
	
	void deleteByUsername(String username);
	
	long countByRoleLike(UserRole role);
}
