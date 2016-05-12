package com.itbegin.outprojs.microcard.model.json;

public class ApiResult {
	public boolean success;
	public int state;
	public String desc;
	public Object data;
	
	public ApiResult(boolean success,int state,String desc,Object data){
		this.success=success;
		this.state=state;
		this.desc=desc;
		this.data=data;
	}
}
