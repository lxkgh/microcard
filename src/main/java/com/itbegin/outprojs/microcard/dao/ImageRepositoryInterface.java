package com.itbegin.outprojs.microcard.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.itbegin.outprojs.microcard.dao.repository.ImageRepositoryInterfaceCustom;
import com.itbegin.outprojs.microcard.model.entity.Image;
import com.itbegin.outprojs.microcard.model.enums.ImageUse;

public interface ImageRepositoryInterface  extends MongoRepository<Image, String>,
	ImageRepositoryInterfaceCustom {
	
	Image findByPath(String path);
	
	void deleteByPath(String path);
	
	Page<Image> findByImageUse(ImageUse imageUse,Pageable pageable);
}
