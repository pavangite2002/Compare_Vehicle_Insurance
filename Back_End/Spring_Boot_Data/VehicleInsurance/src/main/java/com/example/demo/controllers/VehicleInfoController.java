package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.VehicleInfo;
import com.example.demo.servises.VehicleInfoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class VehicleInfoController {

	@Autowired
	VehicleInfoService viser;
	
	@PostMapping("/getallvehicleinfo")
	public List<VehicleInfo> getVehicleInfo(){
		
		return viser.getVehicleInfo();
	}
	
}
