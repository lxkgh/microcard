package com.itbegin.outprojs.microcard.model.json;

public class MyEntry {
	
	public MyEntry(String key, Object value) {
		super();
		this.key = key;
		this.value = value;
	}
	private String key;
	private Object value;
	
	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public Object getValue() {
		return value;
	}

	public void setValue(Object value) {
		this.value = value;
	}

	public String toString(){
		return this.key+" "+this.value;
		
	}
}
