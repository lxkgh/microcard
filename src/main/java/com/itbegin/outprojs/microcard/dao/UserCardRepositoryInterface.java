package com.itbegin.outprojs.microcard.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.itbegin.outprojs.microcard.dao.repository.UserCardRepositoryInterfaceCustom;
import com.itbegin.outprojs.microcard.model.entity.UserCard;

public interface UserCardRepositoryInterface extends MongoRepository<UserCard, String>,
UserCardRepositoryInterfaceCustom {
	UserCard findByUserId(String userId);
	void deleteByUserId(String userId);
}
