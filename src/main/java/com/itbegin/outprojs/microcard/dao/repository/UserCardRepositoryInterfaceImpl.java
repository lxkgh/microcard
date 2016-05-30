package com.itbegin.outprojs.microcard.dao.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.itbegin.outprojs.microcard.model.entity.UserCard;

public class UserCardRepositoryInterfaceImpl implements
		UserCardRepositoryInterfaceCustom {

	@Autowired
	private MongoOperations mongoOperations;
	
	@Override
	public void updateBaseInfo(String userId, UserCard uc) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("name", uc.getName());
		update.set("idcard", uc.getIdcard());
		update.set("company", uc.getCompany());
		update.set("job", uc.getJob());
		update.set("department", uc.getDepartment());
		update.set("phone", uc.getPhone());
		update.set("address", uc.getAddress());
		update.set("email", uc.getEmail());
		mongoOperations.updateFirst(query, update, UserCard.class);
	}

	@Override
	public void updateSocietyInfo(String userId, UserCard uc) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("qq", uc.getQq());
		update.set("qqQRCode", uc.getQqQRCode());
		update.set("weChat", uc.getWeChat());
		update.set("weChatQRCode", uc.getWeChatQRCode());
		mongoOperations.updateFirst(query, update, UserCard.class);
	}

	@Override
	public void updateSignature(String userId, UserCard uc) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("signature", uc.getSignature());
		mongoOperations.updateFirst(query, update, UserCard.class);
	}

	@Override
	public void updateShareInfo(String userId, UserCard uc) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("shareTitle", uc.getShareTitle());
		update.set("shareAbstract", uc.getShareAbstract());
		mongoOperations.updateFirst(query, update, UserCard.class);
	}

}