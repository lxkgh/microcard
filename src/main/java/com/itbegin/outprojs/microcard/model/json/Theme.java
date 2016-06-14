package com.itbegin.outprojs.microcard.model.json;

import java.util.List;
import java.util.Map;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Theme {
	public Theme(){}
	public Theme(Integer code,Map<String,List<Item>> themeInfo){
		super();
		this.code=code;
		this.themeInfo= themeInfo;
	}
	public Integer code;
	public Map<String,List<Item>> themeInfo;
	public Integer getCode() {
		return code;
	}
	public void setCode(Integer code) {
		this.code = code;
	}
	public Map<String, List<Item>> getThemeInfo() {
		return themeInfo;
	}
	public void setThemeInfo(Map<String, List<Item>> themeInfo) {
		this.themeInfo = themeInfo;
	}
}
