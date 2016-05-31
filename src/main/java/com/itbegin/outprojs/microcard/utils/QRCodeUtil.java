package com.itbegin.outprojs.microcard.utils;

import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.EnumMap;
import java.util.Hashtable;
import java.util.Map;

import javax.imageio.ImageIO;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.BinaryBitmap;
import com.google.zxing.DecodeHintType;
import com.google.zxing.EncodeHintType;
import com.google.zxing.LuminanceSource;
import com.google.zxing.MultiFormatReader;
import com.google.zxing.Result;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.common.HybridBinarizer;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;

public class QRCodeUtil {
	/**
	 * 生成QRCode二维码
	 * hintMap.put(EncodeHintType.CHARACTER_SET, "UTF-8"),否则中文编译后解析不了
	 * @param contents
	 * @param file
	 * @param format
	 * @param width
	 * @param height
	 * @param hints
	 * @throws WriterException
	 * @throws IOException
	 */
	public static void encode(String contents,File file,String format,int width, int height,Map<EncodeHintType, ?> hints) throws WriterException,IOException {
		QRCodeWriter qrCodeWriter = new QRCodeWriter();
		BitMatrix byteMatrix = qrCodeWriter.encode(contents ,BarcodeFormat.QR_CODE, width,
				height, hints);
		writeToFile(byteMatrix,format, file);
	}
	
	/**
	 * 生成二维码文件
	 * @param matrix
	 * @param format
	 * @param file
	 * @throws IOException
	 */
	public static void writeToFile(BitMatrix matrix, String format, File file) throws IOException {
		 BufferedImage image = toBufferedImage(matrix);
		 ImageIO.write(image, format, file);

	}
	
	/**
	 * 生成二维码图片
	 * @param matrix
	 * @return
	 */
	public static BufferedImage toBufferedImage(BitMatrix matrix) {
		int width = matrix.getWidth();
		int height = matrix.getHeight();
		
		BufferedImage image = new BufferedImage(width, height,
				BufferedImage.TYPE_INT_RGB);
		
		image.createGraphics();
		Graphics2D graphics = (Graphics2D) image.getGraphics();
		graphics.setColor(Color.WHITE);
		graphics.fillRect(0, 0, width, height);
		graphics.setColor(Color.BLACK);
		
		for (int i = 0; i < width; i++) {
			for (int j = 0; j < height; j++) {
				if (matrix.get(i, j)) {
					graphics.fillRect(i, j, 1, 1);
				}
			}
		}
		
		return image;

	}
	
	public static void main(String[] args) {
		String myCodeText = "http://192.168.10.116:8080";
		String filePath = "/Users/caoyongzheng/Documents/qrcode.png";
		String fileType = "png";
		File myFile = new File(filePath);
		try {
			Map<EncodeHintType, Object> hintMap = new EnumMap<EncodeHintType, Object>(EncodeHintType.class);
			hintMap.put(EncodeHintType.CHARACTER_SET, "UTF-8");
			// Now with zxing version 3.2.1 you could change border size (white border size to just 1)
			hintMap.put(EncodeHintType.MARGIN, 1); /* default = 4 */
			hintMap.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.M);
			
			encode(myCodeText,myFile,fileType,250,250,hintMap);
			
		} catch (WriterException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("\n\nYou have successfully created QR Code.");
	}
}
