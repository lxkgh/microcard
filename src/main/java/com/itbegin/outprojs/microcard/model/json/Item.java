package com.itbegin.outprojs.microcard.model.json;

public class Item {
	public Item(String number,String website,String title,String paths){
		this.number = number;
		this.website=website;
		this.title = title;
		this.paths = paths;
	}
	public Item(){}
	public String number;
	public String website;
	public String title;
	public String paths;
}
