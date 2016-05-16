package com.itbegin.outprojs.microcard.dao.repository;

import com.itbegin.outprojs.microcard.model.entity.User;

public interface UserRepositoryInterfaceCustom {
	public void updateName(String id, String Name);
	public void updateUser(User u);
}
