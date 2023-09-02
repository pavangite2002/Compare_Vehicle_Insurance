package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.*;
import com.example.demo.servises.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PlanController {
	
	@Autowired
	PlanServices pservice;

	@PostMapping("/savePlanDetails")
	public PlanEntity savePlanDetails(PlanEntity p)
	{
		return pservice.savePlanDetails(p);
	}
	@GetMapping("/getPlanDetails")
	public List<PlanEntity> getPlanDetails()
	{
		return pservice.getPlanDetails();
	}
}
