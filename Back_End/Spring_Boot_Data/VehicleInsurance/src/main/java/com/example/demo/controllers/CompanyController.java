package com.example.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Company;
import com.example.demo.servises.CompanyService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class CompanyController {

	@Autowired
	CompanyService compser;
	
	@GetMapping("/getallcompanies")
	public List<Company> getAllCompanies()
	{
		return compser.getAllCompany();
	}
	
	
	@PostMapping("/registerascompany")
	public Company saveCompany(@RequestBody Company comp)
	{
		return compser.saveCompany(comp);
	}
}
