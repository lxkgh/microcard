package com.itbegin.outprojs.microcard.model.enums;

public enum ImageUse {
	BACKGROUND("背景图片"),ICON("图标"),USER("用户图片");
	private String viewName;

	private ImageUse(String viewName) {
		this.setViewName(viewName);
	}

	public String getViewName() {
		return viewName;
	}

	public void setViewName(String viewName) {
		this.viewName = viewName;
	}
	
}
