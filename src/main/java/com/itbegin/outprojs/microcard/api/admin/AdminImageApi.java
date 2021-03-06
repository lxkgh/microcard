package com.itbegin.outprojs.microcard.api.admin;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.dao.ImageRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.Image;
import com.itbegin.outprojs.microcard.model.enums.ImageUse;
import com.itbegin.outprojs.microcard.model.exceptions.EmptyKeyException;
import com.itbegin.outprojs.microcard.model.exceptions.NotFoundException;
import com.itbegin.outprojs.microcard.model.json.ApiResult;
import com.itbegin.outprojs.microcard.utils.HashUtil;
import com.itbegin.outprojs.microcard.utils.ImageUtil;
import com.itbegin.outprojs.microcard.utils.PathUtil;
import com.itbegin.outprojs.microcard.utils.StrUtil;

@RestController
@RequestMapping(value="/api/admin/image")
public class AdminImageApi {
	@Autowired
	private ImageRepositoryInterface imageRepositoryInterface;
	
	@RequestMapping(value = "/page", method = RequestMethod.GET)
	public ApiResult getPage(int page,int pagesize,ImageUse imageUse){
		try {
			Page<Image> imagePage=imageRepositoryInterface.findByImageUse(imageUse,new PageRequest(page, pagesize));
			Map<String,Object> datas=new HashMap<String,Object>();
			datas.put("totalPages",imagePage.getTotalPages());
			datas.put("totalElems",imagePage.getTotalElements());
			datas.put("datasize", imagePage.getNumberOfElements());
			datas.put("data",imagePage.getContent());
			return new ApiResult(true,imagePage.getTotalPages(),"获取图片成功",datas);
		} catch (Exception e) {
			return new ApiResult(false, 0, "获取图片失败", null);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public ApiResult get(@Param("id") String id){
		try {
			if (StrUtil.isEmpty(id)) {
				throw new EmptyKeyException(0, "id为空");
			}
			Image image = imageRepositoryInterface.findOne(id);
			if (image==null) {
				throw new NotFoundException(1, "图片不存在");
			}
			return new ApiResult(true, 0, "获取图片成功", image);
		} catch (EmptyKeyException ek){
			return new ApiResult(false, ek.getState(), ek.getDesc(), null);
		} catch (NotFoundException nf) {
			return new ApiResult(false, nf.getState(), nf.getDesc(), null);
		} catch (Exception e) {
			return new ApiResult(false, 2, "未知异常", null);
		}
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ApiResult add(@RequestBody Image image) {
		String hashImage=null;
		try {
			hashImage=HashUtil.generateMD5(image.getData());

			//保持图片
			image.setPath(PathUtil.getImgRelPath(hashImage, image.getType()));
			imageRepositoryInterface.save(image);
			//生成图片文件	
			File imageFile=new File(PathUtil.getImgPath(hashImage, image.getType()));
			ImageUtil.ConvertBase64ToImage(image.getData(), imageFile);
			
			return new ApiResult(true, 0, "添加图片成功",null);
		} catch (IOException e) {
			imageRepositoryInterface.deleteByPath(PathUtil.getImgRelPath(hashImage, image.getType()));
			return new ApiResult(false, 0, "保存图片失败",null);
		} catch (DuplicateKeyException e) {
			return new ApiResult(false, 1, "图片已存在",null);
		} catch (Exception e) {
			return new ApiResult(false, 2, "未知异常",null);
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
			return new ApiResult(true, 0, "删除图片成功",null);
		} catch (Exception e) {
			return new ApiResult(false, 1, "删除图片失败",null);
		}
	}
}
