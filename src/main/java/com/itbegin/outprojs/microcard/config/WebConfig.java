package com.itbegin.outprojs.microcard.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.VersionResourceResolver;


@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {

	  VersionResourceResolver versionResolver = new VersionResourceResolver()
	    .addContentVersionStrategy("/**");

	  registry.addResourceHandler("/**")
	    .addResourceLocations("classpath:/assets/","file:///resources/microcard/")
	    .resourceChain(false).addResolver(versionResolver);
	}
}
