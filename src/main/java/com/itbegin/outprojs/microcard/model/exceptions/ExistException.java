package com.itbegin.outprojs.microcard.model.exceptions;

public class ExistException extends RuntimeException {
	private static final long serialVersionUID = -5212691424135782328L;
	
	private String state ;  //异常对应的返回码  
	private String desc;  //异常对应的描述信息
	
	public ExistException() {
		super();
	}

	public ExistException(String state, String desc) {
		super();
		this.state = state;
		this.desc = desc;
	}
	
	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

}
