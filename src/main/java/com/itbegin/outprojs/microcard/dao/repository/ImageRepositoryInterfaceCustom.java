package com.itbegin.outprojs.microcard.dao.repository;

import com.itbegin.outprojs.microcard.model.entity.Image;

public interface ImageRepositoryInterfaceCustom {
	public void updateName(String id, String name);

	void updateTypeAndPath(String id, Image image);
}
