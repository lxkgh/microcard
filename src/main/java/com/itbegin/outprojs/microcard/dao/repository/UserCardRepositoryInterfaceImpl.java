package com.itbegin.outprojs.microcard.dao.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.itbegin.outprojs.microcard.model.entity.Image;
import com.itbegin.outprojs.microcard.model.entity.UserCard;
import com.itbegin.outprojs.microcard.model.json.Item;
import com.itbegin.outprojs.microcard.model.json.Theme;

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
	@Override
	public void updateTheme(String userId,Theme theme){
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("theme",theme );
		mongoOperations.updateFirst(query, update, UserCard.class);
	}
	
	@Override
	public void updateUserIcon(String userId, Image image) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("userIcon", image);
		mongoOperations.updateFirst(query, update, UserCard.class);
	}
	
	@Override
	public void updateBkgImg(String userId,Image image){
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("bkgImg", image);
		mongoOperations.updateFirst(query, update, UserCard.class);
	}
	@Override
	public void updateQqQRCode(String userId, Image image) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("qqQRCode", image);
		mongoOperations.updateFirst(query, update, UserCard.class);
	}
	
	@Override
	public void updateWeChatQRCode(String userId, Image image) {
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("weChatQRCode", image);
		mongoOperations.updateFirst(query, update, UserCard.class);
	}
	@Override
	public void updateContactList(String userId, List<String>contactList){
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("contactList", contactList);
		mongoOperations.updateFirst(query, update, UserCard.class);
	}
	@Override 
	public void addEmptyTheme(String userId){
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		String number = "100";
		String title = "";
		String website = "";
		String icons = "icons";
		String paths = "";
		Item item = new Item(number,website,title,paths);
		Integer code = new Integer(1);
		List<Item> listItems = new ArrayList<Item>();
		listItems.add(item);
		Map<String,List<Item>> info = new HashMap<String,List<Item>>();
		info.put(icons, listItems);
		Theme theme = new Theme(code,info);
		update.set("themes", theme);
		mongoOperations.updateFirst(query, update, UserCard.class);
	}
	@Override
	public void updateThemes(String userId,List<Theme>themes){
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		update.set("themes", themes);
		mongoOperations.updateFirst(query, update, UserCard.class);
	}
	@Override
	public void deleteUnusefulThemesInfo(String userId,Integer code,List<Theme>themes){
		Query query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		List<Theme> tml = new ArrayList<Theme>();
		for(Theme tm:themes){
			if(tm.getCode()==code){
				tml.add(tm);
			}
		}
		themes.removeAll(tml);
		update.set("themes", themes);
		mongoOperations.updateFirst(query, update, UserCard.class);
	}
	@Override
	public void sortThemesByCode(String userId,Integer code,List<Theme>themes){
		Query  query = new Query();
		query.addCriteria(Criteria.where("userId").is(userId));
		Update update = new Update();
		List<Theme> tml = new ArrayList<Theme>();
		Theme thm = new Theme();
		for(Theme tm:themes){
			if(tm.getCode()==code){
				thm = tm;
				tml.add(tm);
			}
		}
		themes.removeAll(tml);
		themes.add(0, thm);
		update.set("themes", themes);
		mongoOperations.updateFirst(query, update, UserCard.class);
	}
}