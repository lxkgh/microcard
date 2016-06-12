package com.itbegin.outprojs.microcard.service;

import java.io.IOException;

import com.itbegin.outprojs.microcard.model.entity.Image;

public interface ImageService {

	void deleteCompletely(String id);

	Image add(Image image) throws IOException;
	
}
