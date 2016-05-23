package com.itbegin.outprojs.microcard.utils;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.xml.bind.DatatypeConverter;

public class ImageUtil {
	public static void ConvertBase64ToImage(String base64,String type,File file) throws IOException{
		byte[] imageByte=DatatypeConverter.parseBase64Binary(base64.split(",")[1]);
		
		ByteArrayInputStream bis = new ByteArrayInputStream(imageByte);
		BufferedImage imgBuf = ImageIO.read(new ByteArrayInputStream(imageByte));
		bis.close();
		
		ImageIO.write(imgBuf,type, file);
	}
}
