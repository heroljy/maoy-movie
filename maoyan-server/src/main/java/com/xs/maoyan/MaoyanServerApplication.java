package com.xs.maoyan;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan(value = { "com.xs.maoyan.**.dao" })
@ComponentScan(basePackages = "com.xs")
public class MaoyanServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MaoyanServerApplication.class, args);
	}
}
