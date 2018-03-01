package com.xs.maoyan.common;

import java.nio.charset.Charset;
import java.util.List;

import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;

/**
 * Web配置文件,有如下设置：
 * <ul>
 * <li>设置允许GET、POST、OPTIONS请求(设置OPTIONS是为了支持跨域请求)
 * </ul>
 * 
 * @author zhouxianli
 *
 */
@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				// .allowedOrigins("http://localhost:8080")
				// .allowedHeaders("header1", "header2", "header3")
				// .exposedHeaders("header1", "header2")
				// .allowCredentials(false)
				// .maxAge(3600)
				.allowedMethods("GET", "POST", "OPTIONS");
	}
	@Bean
	public HttpMessageConverters fastjson(){
		FastJsonHttpMessageConverter fastConverter = new FastJsonHttpMessageConverter();  
		FastJsonConfig fastJsonConfig = new FastJsonConfig();  
		fastJsonConfig.setSerializerFeatures(SerializerFeature.PrettyFormat);  
		fastConverter.setFastJsonConfig(fastJsonConfig);  
		HttpMessageConverter<?> converter = fastConverter;  
		return new HttpMessageConverters(converter); 
	}
	
	@Bean
    public HttpMessageConverter<String> responseBodyConverter() {
        StringHttpMessageConverter converter = new StringHttpMessageConverter(
                Charset.forName("UTF-8"));
        return converter;
    }

    @Override
    public void configureMessageConverters(
            List<HttpMessageConverter<?>> converters) {
        super.configureMessageConverters(converters);
        converters.add(responseBodyConverter());
    }

    @Override
    public void configureContentNegotiation(
            ContentNegotiationConfigurer configurer) {
        configurer.favorPathExtension(false);
    }
}
