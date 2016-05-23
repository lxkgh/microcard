package com.itbegin.outprojs.microcard.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.itbegin.outprojs.microcard.dao.repository.ImageRepositoryInterfaceCustom;
import com.itbegin.outprojs.microcard.model.entity.Image;

public interface ImageRepositoryInterface  extends MongoRepository<Image, String>,
	ImageRepositoryInterfaceCustom {
	Image findByPath(String path);
	void deleteByPath(String path);
}
