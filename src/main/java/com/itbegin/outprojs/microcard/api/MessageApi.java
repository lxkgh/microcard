package com.itbegin.outprojs.microcard.api;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itbegin.outprojs.microcard.model.json.ApiResult;
import com.itbegin.outprojs.microcard.model.json.Message;
import com.itbegin.outprojs.microcard.utils.SendPhoneMessageUtil;
import com.itbegin.outprojs.microcard.utils.StrUtil;

@RestController
@RequestMapping("/api/message")
public class MessageApi {
	
	@RequestMapping(value="/send",method = RequestMethod.POST)
	public ApiResult sendMessage(@RequestBody Message message){
		try {
			if (StrUtil.isEmpty(message.getPhone())) {
				return new ApiResult(false, 0, "手机号码不能为空", null);
			}
			if (SendPhoneMessageUtil.sendMessage(message.getMsg(), message.getPhone())) {
				return new ApiResult(true, 0, "发送消息成功", null);
			}
			return new ApiResult(false, 1, "发送消息失败", null);
		} catch (Exception e) {
			return new ApiResult(false, 2, "发送消息失败", null);
		}
	}
}
