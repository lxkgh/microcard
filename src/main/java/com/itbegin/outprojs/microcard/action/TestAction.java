package com.itbegin.outprojs.microcard.action;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.itbegin.outprojs.microcard.model.json.MyEntry;
import com.itbegin.outprojs.microcard.utils.PathUtil;

@Controller
@EnableAutoConfiguration
public class TestAction {

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String editUser(Model model) {
		model.addAttribute("CSSes", PathUtil.resolveCSSs("index"));
		model.addAttribute("JSs", PathUtil.resolveJSs("vendor","index"));
		List<MyEntry> datas=new ArrayList<MyEntry>();
		datas.add(new MyEntry("username","234"));
		model.addAttribute("Datas", datas);
		return "template";
	}
}
