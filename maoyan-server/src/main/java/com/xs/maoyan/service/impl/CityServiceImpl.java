package com.xs.maoyan.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xs.maoyan.dao.CityDao;
import com.xs.maoyan.model.City;
import com.xs.maoyan.service.CityService;

@Service("cityService")
public class CityServiceImpl implements CityService{
	@Autowired
    private CityDao cityDao;
	
	public City selectByPrimaryKey(Integer id){
		return cityDao.selectByPrimaryKey(id);
	}

	@Override
	public List<City> selectAll() {
		return cityDao.selectAll();
	}
}
