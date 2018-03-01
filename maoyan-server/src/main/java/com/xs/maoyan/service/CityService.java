package com.xs.maoyan.service;

import java.util.List;

import com.xs.maoyan.model.City;

public interface CityService {
	public City selectByPrimaryKey(Integer id);	
	public List<City> selectAll();	
}
