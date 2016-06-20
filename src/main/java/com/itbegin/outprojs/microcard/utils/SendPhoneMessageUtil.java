package com.itbegin.outprojs.microcard.utils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;



public class SendPhoneMessageUtil {
    /* 返回码
    0   提交成功
    101 无此用户
    102 密码错
    103 提交过快（提交速度超过流速限制）
    104 系统忙（因平台侧原因，暂时无法处理提交的短信）
    105 敏感短信（短信内容包含敏感词）
    106 消息长度错（>536或<=0）
    107 包含错误的手机号码
    108 手机号码个数错（群发>50000或<=0）
    109 无发送额度（该用户可用短信数已使用完）
    110 不在发送时间内(验证码通知7*24小时发送)
    111 超出该账户当月发送额度限制
    112 无此产品，用户没有订购该产品
    113 extno格式错（非数字或者长度不对）
    115 自动审核驳回
    116 签名不合法，未带签名（用户必须带签名的前提下）
    117 IP地址认证错,请求调用的IP地址不是系统登记的IP地址
    118 用户没有相应的发送权限
    119 用户已过期
    120 内容不在白名单中
     */
	public static synchronized boolean sendMessage(String msg,String phoneNum){
        try {
             HttpPost post = new HttpPost("http://120.26.69.248/msg/HttpBatchSendSM");
             List<NameValuePair> params = new ArrayList<NameValuePair>();

             //正式
             params.add(new BasicNameValuePair("account","ao1ypa"));
             params.add(new BasicNameValuePair("pswd","hL71AA9G"));
             System.out.println(msg);
             params.add(new BasicNameValuePair("msg",msg));
             params.add(new BasicNameValuePair("mobile",phoneNum));
             params.add(new BasicNameValuePair("needstatus","true"));
            post.setEntity(new UrlEncodedFormEntity(params,"UTF-8"));
            CloseableHttpClient client = HttpClients.createDefault();
            client.execute(post);
            return true;
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return false;
        } catch (ClientProtocolException e) {
            e.printStackTrace();
            return false;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }
}
