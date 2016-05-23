package com.itbegin.outprojs.microcard.api.admin;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.Param;
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
	
	@RequestMapping(value = "/page", method = RequestMethod.GET)
	public ApiResult getPage(@Param("page") int page,@Param("pagesize") int pagesize){
		try {
			Page<Image> userpage=imageRepositoryInterface.findAll(new PageRequest(page, pagesize));
			Map<String,Object> datas=new HashMap<String,Object>();
			datas.put("totalPages",userpage.getTotalPages());
			datas.put("totalElems",userpage.getTotalElements());
			datas.put("datasize", userpage.getNumberOfElements());
			datas.put("data",userpage.getContent());
			return new ApiResult(true,userpage.getTotalPages(),"获取图片成功",datas);
		} catch (Exception e) {
			return new ApiResult(false, 0, "获取图片失败", null);
		}
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ApiResult addUser(@RequestBody Image image) {
		String hashImage=null;
		try {
			hashImage=HashUtil.generateMD5(image.getData());
			//保持图片
			image.setPath(PathUtil.getImgRelPath(hashImage, image.getType()));
			imageRepositoryInterface.save(image);
			
			//生成图片文件	
			File imageFile=new File(PathUtil.getImgPath(hashImage, image.getType()));
			ImageUtil.ConvertBase64ToImage(image.getData(), image.getType().getSuffix(), imageFile);
			
			return new ApiResult(true, 0, "添加图片成功",null);
		} catch (IOException e) {
			imageRepositoryInterface.deleteByPath(hashImage);
			return new ApiResult(false, 0, "保存图片失败",null);
		} catch (Exception e) {
			return new ApiResult(false, 1, "图片已存在",null);
		}	
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public ApiResult edit(@RequestBody Image image){
		try {
			imageRepositoryInterface.updateName(image.getId(),image.getName());
			return new ApiResult(true, 0, "更新成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "更新失败", null);
		}
	}
	
	@RequestMapping(method = RequestMethod.DELETE)
	public ApiResult addUser(@Param("id") String id) {
		try {
			Image img = imageRepositoryInterface.findOne(id);
			if (img==null) {
				return new ApiResult(false, 0, "图片不存在",null);
			}
			imageRepositoryInterface.delete(id);
			FileUtils.forceDelete(new File(PathUtil.getImgAbsPath(img.getPath())));
			return new ApiResult(false, 0, "删除图片成功",null);
		} catch (Exception e) {
			return new ApiResult(false, 1, "删除图片失败",null);
		}
	}
}
