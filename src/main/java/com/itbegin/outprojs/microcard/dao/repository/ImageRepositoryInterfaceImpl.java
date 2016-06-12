package com.itbegin.outprojs.microcard.dao.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.itbegin.outprojs.microcard.model.entity.Image;

public class ImageRepositoryInterfaceImpl implements
	ImageRepositoryInterfaceCustom {
	@Autowired
	MongoOperations mongoOperations;

	@Override
	public void updateName(String id, String name) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		Update update = new Update();
		update.set("name", name);
		mongoOperations.updateFirst(query, update, Image.class);
	}
	
	@Override
	public void updateTypeAndPath(String id, Image image) {
		Query query = new Query();
		query.addCriteria(Criteria.where("id").is(id));
		Update update = new Update();
		update.set("type", image.getType());
		update.set("path", image.getPath());
		mongoOperations.updateFirst(query, update, Image.class);
	}

}
