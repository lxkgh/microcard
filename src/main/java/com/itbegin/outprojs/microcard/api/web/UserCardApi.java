package com.itbegin.outprojs.microcard.api.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.config.security.MySecurityContext;
import com.itbegin.outprojs.microcard.dao.UserCardRepositoryInterface;
import com.itbegin.outprojs.microcard.model.entity.UserCard;
import com.itbegin.outprojs.microcard.model.exceptions.EmptyKeyException;
import com.itbegin.outprojs.microcard.model.exceptions.NotFoundException;
import com.itbegin.outprojs.microcard.model.json.ApiResult;
import com.itbegin.outprojs.microcard.utils.StrUtil;

@RestController
@RequestMapping("/api/usercard")
public class UserCardApi {
	
	@Autowired
	private UserCardRepositoryInterface userCardRepositoryInterface;
	
	@RequestMapping(method = RequestMethod.GET)
	public ApiResult add(String userId) {
		try {
			if (StrUtil.isEmpty(userId)) {
				throw new EmptyKeyException(0, "用户Id不能为空");
			}
			UserCard uc=userCardRepositoryInterface.findByUserId(userId);
			if (uc==null) {
				throw new NotFoundException(1, "名片不存在");
			}
			return new ApiResult(true, 0, "获取名片成功", uc);
		} catch(EmptyKeyException ek) {
			return new ApiResult(false, ek.getState(),ek.getDesc(), null);
		} catch (NotFoundException nf) {
			return new ApiResult(false, nf.getState(),nf.getDesc(), null);
		} catch (Exception e) {
			return new ApiResult(false, 2, "获取名片失败,未知异常", null);
		}
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ApiResult add(@RequestBody UserCard uc) {
		try {
			uc.setUserId(MySecurityContext.getUserId());
			userCardRepositoryInterface.save(uc);
			return new ApiResult(true, 0, "添加名片成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "添加名片失败", null);
		}
	}
	
	@RequestMapping(value = "/baseinfo",method = RequestMethod.PUT)
	public ApiResult updateBaseInfo(@RequestBody UserCard uc){
		try {
			userCardRepositoryInterface.updateBaseInfo(MySecurityContext.getUserId(), uc);
			return new ApiResult(true, 0, "修改名片基本信息成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "修改名片基本信息失败", null);
		}
	}
	
	@RequestMapping(value = "/societyinfo",method = RequestMethod.PUT)
	public ApiResult updateSocietyInfo(@RequestBody UserCard uc){
		try {
			userCardRepositoryInterface.updateSocietyInfo(MySecurityContext.getUserId(), uc);
			return new ApiResult(true, 0, "修改名片社交信息成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "修改名片社交信息失败", null);
		}
	}
	
	@RequestMapping(value = "/signature",method = RequestMethod.PUT)
	public ApiResult updateSignature(@RequestBody UserCard uc){
		try {
			userCardRepositoryInterface.updateSignature(MySecurityContext.getUserId(), uc);
			return new ApiResult(true, 0, "修改名片签名成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "修改名片签名失败", null);
		}
	}
	
	@RequestMapping(value = "/shareinfo",method = RequestMethod.PUT)
	public ApiResult updateShareInfo(@RequestBody UserCard uc){
		try {
			userCardRepositoryInterface.updateShareInfo(MySecurityContext.getUserId(), uc);
			return new ApiResult(true, 0, "修改名片分享信息成功", null);
		} catch (Exception e) {
			return new ApiResult(false, 0, "修改名片分享信息失败", null);
		}
	}
	
}
