package com.itbegin.outprojs.microcard.utils;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.xml.bind.DatatypeConverter;

import org.apache.commons.io.FileUtils;

public class ImageUtil {
	public static void ConvertBase64ToImage(String base64,File file) throws IOException{
		String[] strings = base64.split(",");
		byte[] imageByte=DatatypeConverter.parseBase64Binary(strings[1]);
		FileUtils.touch(file);
		ByteArrayInputStream bis = new ByteArrayInputStream(imageByte);
		BufferedImage imgBuf = ImageIO.read(new ByteArrayInputStream(imageByte));
		bis.close();
		ImageIO.write(imgBuf,strings[0].split("/")[1].split(";")[0], file);
	}
}
