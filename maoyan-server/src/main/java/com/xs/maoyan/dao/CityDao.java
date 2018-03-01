package com.xs.maoyan.dao;

import java.util.List;

import com.xs.maoyan.model.City;

public interface CityDao {
	/**
	 * 根据主键ID查询地市
	 * @param id--主键ID
	 * @return
	 */
	public City selectByPrimaryKey(Integer id);
	/**
	 * 查询所有
	 * @return
	 */
	public List<City> selectAll();
}
