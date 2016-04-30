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

	public void unpdateName(String id, String Name) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		Update update = new Update();
		update.set("name", Name);
		mongoOperations.updateFirst(query, update, User.class).toString();
	}
}
