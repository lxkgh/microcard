package com.itbegin.outprojs.microcard.service.impl;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itbegin.outprojs.microcard.dao.ImageRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.Image;
import com.itbegin.outprojs.microcard.service.ImageService;
import com.itbegin.outprojs.microcard.utils.ImageUtil;
import com.itbegin.outprojs.microcard.utils.PathUtil;

@Service("imageService")
public class ImageServiceImpl implements ImageService {
	@Autowired
	private ImageRepositoryInterface imageRepositoryInterface;
	
	
	@Override
	public void deleteCompletely(String id) {
		try {
			Image image=imageRepositoryInterface.findOne(id);
			if (image!=null) {
				imageRepositoryInterface.delete(id);
				File file = new File(PathUtil.RESOURCES+image.getPath());
				if (file.isFile()) {
					FileUtils.forceDelete(file);
				}
			}
		} catch (Exception e) {
		}
	}
	
	@Override
	public Image add(Image image) throws IOException{
		//生成图片文件	
		File imageFile=new File(PathUtil.getImgAbsPath(image.getPath()));
		ImageUtil.ConvertBase64ToImage(image.getData(), imageFile);
		return imageRepositoryInterface.save(image);
	}
}
