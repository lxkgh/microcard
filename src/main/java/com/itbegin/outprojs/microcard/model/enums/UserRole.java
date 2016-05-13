package com.itbegin.outprojs.microcard.model.enums;

public enum UserRole  {
	ROLE_USER("普通用户"),ROLE_ADMIN("管理员");
	
	private String vlewName;
	UserRole(String viewName){
		this.setVlewName(viewName);
	}
	public String getVlewName() {
		return vlewName;
	}
	public void setVlewName(String vlewName) {
		this.vlewName = vlewName;
	}
}