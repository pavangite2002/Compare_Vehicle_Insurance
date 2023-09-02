package com.example.demo.servises;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Company;
import com.example.demo.repositories.CompanyRepository;

@Service
public class CompanyService {

	@Autowired
	CompanyRepository comprepo;
	
	public List<Company> getAllCompany(){
		
		return comprepo.findAll();
	}
	
	public Company saveCompany(Company comp) {
		return comprepo.save(comp);
	}
	
}
