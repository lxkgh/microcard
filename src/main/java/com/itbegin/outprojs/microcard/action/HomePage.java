package com.itbegin.outprojs.microcard.action;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.itbegin.outprojs.microcard.utils.PathUtil;

@Controller
@EnableAutoConfiguration
public class HomePage {
	@RequestMapping(value = "/HomePage", method = RequestMethod.GET)
	public String loginPage(Model model) {
		model.addAttribute("CSSes", PathUtil.resolveCSSs("homePage"));
		model.addAttribute("JSs", PathUtil.resolveJSs("vendor","HomePage"));
		return "template";
	}
}
