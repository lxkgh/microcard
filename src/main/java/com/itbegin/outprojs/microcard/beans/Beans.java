package com.itbegin.outprojs.microcard.beans;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;

import com.mongodb.MongoClient;

@Configuration
public class Beans {

	// mongo数据库操作实例
	@Bean
	public MongoOperations mongoOperations() throws Exception {
		SimpleMongoDbFactory simpleMongoDbFactory = new SimpleMongoDbFactory(
				new MongoClient(), "microcard");
		MongoTemplate mongoTemplate = new MongoTemplate(simpleMongoDbFactory);
		return mongoTemplate;
	}
}
