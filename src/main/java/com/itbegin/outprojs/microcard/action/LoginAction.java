package com.itbegin.outprojs.microcard.action;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.itbegin.outprojs.microcard.utils.PathUtil;

@Controller
@EnableAutoConfiguration
public class LoginAction {
	@RequestMapping(value = "/login")
	public String loginPage(Model model) {
		model.addAttribute("CSSes", PathUtil.resolveCSSs("login"));
		model.addAttribute("JSs", PathUtil.resolveJSs("vendor","login"));
		return "template";
	}
}
