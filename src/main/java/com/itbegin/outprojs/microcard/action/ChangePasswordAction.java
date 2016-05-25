package com.itbegin.outprojs.microcard.action;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.itbegin.outprojs.microcard.utils.PathUtil;

@Controller
@EnableAutoConfiguration
public class ChangePasswordAction {
	@RequestMapping(value = "/ChangePassword", method = RequestMethod.GET)
	public String loginPage(Model model) {
		model.addAttribute("CSSes", PathUtil.resolveCSSs("changePassword"));
		model.addAttribute("JSs", PathUtil.resolveJSs("vendor","ChangePassword"));
		return "template";
	}
}
