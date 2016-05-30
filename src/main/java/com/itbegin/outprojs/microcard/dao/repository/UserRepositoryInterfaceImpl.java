package com.itbegin.outprojs.microcard.dao.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.itbegin.outprojs.microcard.model.entity.User;

public class UserRepositoryInterfaceImpl implements
		UserRepositoryInterfaceCustom {
	@Autowired
	MongoOperations mongoOperations;

	@Override
	public void updateUsername(String id, String username) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		Update update = new Update();
		update.set("username", username);
		mongoOperations.updateFirst(query, update, User.class);
	}

	@Override
	public void updateUser(User u) {
		Query query = new Query();
		query.addCriteria(Criteria.where("username").is(u.getUsername()));
		Update update = new Update();
		update.set("realname", u.getRealname());
		update.set("role", u.getRole());
		mongoOperations.updateFirst(query, update, User.class);
	}

	@Override
	public void updatePassword(String userId,String password) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(userId));
		Update update = new Update();
		update.set("password", password);
		mongoOperations.updateFirst(query, update, User.class);
	}
}
