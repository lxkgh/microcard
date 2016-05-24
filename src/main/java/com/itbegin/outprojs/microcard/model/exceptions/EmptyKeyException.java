package com.itbegin.outprojs.microcard.model.exceptions;

public class EmptyKeyException extends RuntimeException {

	private static final long serialVersionUID = 7653811782921851270L;
	
	private int state ;  //异常对应的返回码  
	private String desc;  //异常对应的描述信息
	
	public EmptyKeyException() {
		super();
	}

	public EmptyKeyException(int state, String desc) {
		super();
		this.state = state;
		this.desc = desc;
	}
	
	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
}
