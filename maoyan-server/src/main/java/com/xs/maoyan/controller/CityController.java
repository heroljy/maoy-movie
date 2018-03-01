package com.xs.maoyan.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xs.maoyan.model.City;
import com.xs.maoyan.service.CityService;

@RestController
public class CityController {
	@Autowired
	CityService cityService;
	
	
	@RequestMapping("/cities")
    public List<City> allCities(){
		return cityService.selectAll();
	}
}
