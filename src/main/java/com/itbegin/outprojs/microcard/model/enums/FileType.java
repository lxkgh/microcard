package com.itbegin.outprojs.microcard.model.enums;

public enum FileType {
	PNG("image/png","png"),JPEG("image/jpeg","jpg");
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public String getSuffix() {
		return suffix;
	}
	public void setSuffix(String suffix) {
		this.suffix = suffix;
	}
	private String typeName;
	private String suffix;
	private FileType(String typeName, String suffix) {
		this.typeName = typeName;
		this.suffix = suffix;
	}
	
}
