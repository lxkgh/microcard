package com.itbegin.outprojs.microcard.dao.repository;

import com.itbegin.outprojs.microcard.model.entity.User;

public interface UserRepositoryInterfaceCustom {
	public void updateUsername(String id, String username);
	public void updateUser(User u);
	void updatePassword(String id, String password);
}
