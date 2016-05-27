package com.itbegin.outprojs.microcard.utils;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonEncoding;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ResponseUtil {
	public static void writeJSON(HttpServletResponse response,Object o) throws IOException{
		response.setContentType("application/json;charset=UTF-8");
		ObjectMapper objectMapper = new ObjectMapper();
		JsonGenerator jsonGenerator = objectMapper.getFactory()
				.createGenerator(response.getOutputStream(),JsonEncoding.UTF8);
		
		jsonGenerator.writeObject(o);
	}
}
