package com.itbegin.outprojs.microcard.api.admin;

import java.io.File;

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
			//生成图片文件
			String hashImage=HashUtil.generateMD5(image.getImage());
			File imageFile=new File(PathUtil.getImgPath(hashImage, image.getType()));
			ImageUtil.ConvertBase64ToImage(image.getImage(), image.getType().getSuffix(), imageFile);
		
			//保持图片
			image.setImage(hashImage);
			imageRepositoryInterface.save(image);
			
			return new ApiResult(true, 0, "添加图片成功",null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "添加图片失败", null);
		}
	}
}
