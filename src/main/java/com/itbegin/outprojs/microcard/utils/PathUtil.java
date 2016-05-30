package com.itbegin.outprojs.microcard.utils;

import java.util.ArrayList;
import java.util.List;

import com.itbegin.outprojs.microcard.model.enums.FileType;

public class PathUtil {
	
	public static String RESOURCES="/resources/microcard";
	
	public static String getImgAbsPath(String relPath){
		return new StringBuffer(RESOURCES).append(relPath).toString();
	}
	
	//获取官方图片的绝对路经
	public static String getImgPath(String hashImage,FileType type){
		return new StringBuffer(RESOURCES).append("/img/").append(hashImage.substring(0,2)).append("/")
				.append(hashImage).append(".").append(type.getSuffix()).toString();
	}
	
	//获取官方图片的相对路径
	public static String getImgRelPath(String hashImage,FileType type){
		return new StringBuffer("/img/").append(hashImage.substring(0,2)).append("/").
				append(hashImage).append(".").append(type.getSuffix()).toString();
	}
	
	//获取用户图片的绝对路径
	public static String getUserImgPath(String hashImage,FileType type,String userId){
		return new StringBuffer(RESOURCES).append("/img/userImg/")
				.append(userId.substring(0,2)).append("/").append(userId).append("/")
				.append(hashImage).append(".").append(type.getSuffix()).toString();
	}
	
	//获取用户图片的相对路径
	public static String getUserImgRelPath(String hashImage,FileType type,String userId){
		return new StringBuffer("/img/userImg/").append(userId.substring(0,2)).append("/").append(userId).append("/")
				.append(hashImage).append(".").append(type.getSuffix()).toString();
	}
	
	public static List<String> resolveCSSs(String...csses){
		List<String> cssList=new ArrayList<String>();
		for (int i = 0; i < csses.length; i++) {
			String string = csses[i];
			cssList.add("/css/"+string+".css");
		}
		return cssList;
	}
	public static List<String> resolveJSs(String...JSs){
		List<String> jsList=new ArrayList<String>();
		for (int i = 0; i < JSs.length; i++) {
			String string = JSs[i];
			jsList.add("/js/"+string+".js");
		}
		return jsList;
	}
}
