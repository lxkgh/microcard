package com.itbegin.outprojs.microcard.dao.repository;

import com.itbegin.outprojs.microcard.model.entity.Image;
import com.itbegin.outprojs.microcard.model.entity.UserCard;

public interface UserCardRepositoryInterfaceCustom {
	public void updateBaseInfo(String userId, UserCard uc);
	public void updateSocietyInfo(String userId, UserCard uc);
	public void updateSignature(String userId, UserCard uc);
	public void updateShareInfo(String userId, UserCard uc);
	void updateUserIcon(String userId, Image image);
}
