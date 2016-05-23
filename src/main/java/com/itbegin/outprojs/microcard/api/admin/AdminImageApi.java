package com.itbegin.outprojs.microcard.api.admin;

import java.io.File;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.dao.ImageRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.Image;
import com.itbegin.outprojs.microcard.model.json.ApiResult;
import com.itbegin.outprojs.microcard.utils.HashUtil;
import com.itbegin.outprojs.microcard.utils.ImageUtil;
import com.itbegin.outprojs.microcard.utils.PathUtil;

@RestController
@RequestMapping(value="/api/admin/image")
public class AdminImageApi {
	@Autowired
	private ImageRepositoryInterface imageRepositoryInterface;
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public ApiResult addUser(@RequestBody Image image) {
		try {
			String imageData = image.getImage();
			
			//保持图片
			String hashImage=HashUtil.generateMD5(imageData);
			image.setImage(hashImage);
			imageRepositoryInterface.save(image);
			
			//生成图片文件	
			File imageFile=new File(PathUtil.getImgPath(hashImage, image.getType()));
			ImageUtil.ConvertBase64ToImage(imageData, image.getType().getSuffix(), imageFile);
			
			return new ApiResult(true, 0, "添加图片成功",null);
		} catch (IOException e) {
			return new ApiResult(false, 0, "保存图片失败",null);
		} catch (Exception e) {
			return new ApiResult(false, 1, "图片已存在",null);
		}
			
	}
}
