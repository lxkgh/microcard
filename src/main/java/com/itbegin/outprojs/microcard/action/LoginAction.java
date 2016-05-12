package com.itbegin.outprojs.microcard.action;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.itbegin.outprojs.microcard.model.json.Entry;
import com.itbegin.outprojs.microcard.utils.PathUtil;

@Controller
@EnableAutoConfiguration
public class LoginAction {
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String loginPage(Model model) {
		model.addAttribute("CSSes", PathUtil.resolveCSSs("login"));
		model.addAttribute("JSs", PathUtil.resolveJSs("vendor","login"));
		List<Entry> datas=new ArrayList<Entry>();
		datas.add(new Entry("username","234"));
		model.addAttribute("Datas", datas);
		return "template";
	}
}
