package com.itbegin.outprojs.microcard.action;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.itbegin.outprojs.microcard.utils.PathUtil;

@Controller
@EnableAutoConfiguration
public class AppAction {
	@RequestMapping(value="/")
	public String home(){
		return "redirect:/app";
	}
	
	@RequestMapping(value="/app")
	public String home(Model model){
		model.addAttribute("CSSes", PathUtil.resolveCSSs("app"));
		model.addAttribute("JSs", PathUtil.resolveJSs("vendor","app"));
		return "template";
	}
}
