package com.itbegin.outprojs.microcard.model.entity;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class UserCard implements Serializable {

	private static final long serialVersionUID = 4252584152706401604L;
	@Id
	private String id;
	@Indexed(unique=true)
	private String userId;//用户id,不是username
	
	//=====================基本信息=======================//
	
	private String name;//名称
	private String idcard;//身份证号,为必选项，默认对外隐藏
	private String company;//公司
	private String job;//职业
	private String department;//所在部门
	private String phone;//联系电话
	private String address;//地址
	private String email;//邮箱
	
	
	//=====================社交信息======================//
	private String qq;//QQ
	private String qqQRCode;//QQ二维码
	private String weChat;//微信
	private String weChatQRCode;//微信二维码
	
	//=====================我的签名======================//
	private String signature;//我的签名
	
	//=====================分享======================//
	private String shareTitle;//分享的标题
	private String shareAbstract;//分享的摘要
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getQq() {
		return qq;
	}
	public void setQq(String qq) {
		this.qq = qq;
	}
	public String getQqQRCode() {
		return qqQRCode;
	}
	public void setQqQRCode(String qqQRCode) {
		this.qqQRCode = qqQRCode;
	}
	public String getWeChat() {
		return weChat;
	}
	public void setWeChat(String weChat) {
		this.weChat = weChat;
	}
	public String getWeChatQRCode() {
		return weChatQRCode;
	}
	public void setWeChatQRCode(String weChatQRCode) {
		this.weChatQRCode = weChatQRCode;
	}
	public String getSignature() {
		return signature;
	}
	public void setSignature(String signature) {
		this.signature = signature;
	}
	public String getShareTitle() {
		return shareTitle;
	}
	public void setShareTitle(String shareTitle) {
		this.shareTitle = shareTitle;
	}
	public String getShareAbstract() {
		return shareAbstract;
	}
	public void setShareAbstract(String shareAbstract) {
		this.shareAbstract = shareAbstract;
	}
	public String getIdcard() {
		return idcard;
	}
	public void setIdcard(String idcard) {
		this.idcard = idcard;
	}
}
