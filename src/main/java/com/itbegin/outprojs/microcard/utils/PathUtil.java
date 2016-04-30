package com.itbegin.outprojs.microcard.utils;

import java.util.ArrayList;
import java.util.List;

public class PathUtil {
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
