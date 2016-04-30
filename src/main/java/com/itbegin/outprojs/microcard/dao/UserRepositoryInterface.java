package com.itbegin.outprojs.microcard.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.itbegin.outprojs.microcard.dao.repository.UserRepositoryInterfaceCustom;
import com.itbegin.outprojs.microcard.model.entity.User;

public interface UserRepositoryInterface extends MongoRepository<User, String>,
		UserRepositoryInterfaceCustom {

}
