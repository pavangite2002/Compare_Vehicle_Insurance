package com.example.demo.servises;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.VehicleInfo;
import com.example.demo.repositories.VehicleInfoRepository;

@Service
public class VehicleInfoService {
	
	@Autowired(required=true)
	VehicleInfoRepository virepo;

	public List<VehicleInfo> getVehicleInfo() {
		
		return virepo.findAll();
	}
	
	

}
