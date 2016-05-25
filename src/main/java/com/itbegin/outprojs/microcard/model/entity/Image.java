package com.itbegin.outprojs.microcard.model.entity;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import com.itbegin.outprojs.microcard.model.enums.FileType;
import com.itbegin.outprojs.microcard.model.enums.ImageUse;

@Document
public class Image implements Serializable {

	private static final long serialVersionUID = 8489328588672633164L;
	
	@Id
	private String id;
	@Indexed(unique=true)
	private String path;//图片相对路经
	private String name;
	private FileType type;
	private ImageUse imageUse;
	
	@Transient
	private String data;
	
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
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public FileType getType() {
		return type;
	}
	public void setType(FileType type) {
		this.type = type;
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public ImageUse getImageUse() {
		return imageUse;
	}
	public void setImageUse(ImageUse imageUse) {
		this.imageUse = imageUse;
	}
}
