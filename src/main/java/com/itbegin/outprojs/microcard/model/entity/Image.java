package com.itbegin.outprojs.microcard.model.entity;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.itbegin.outprojs.microcard.model.enums.FileType;

@Document
public class Image implements Serializable {

	private static final long serialVersionUID = 8489328588672633164L;
	@Id
	private String id;
	private String name;
	@Indexed(unique=true)
	private String image;//图片base64字符串的哈西值
	private FileType type;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public FileType getType() {
		return type;
	}
	public void setType(FileType type) {
		this.type = type;
	}
}
