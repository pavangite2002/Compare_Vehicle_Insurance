package com.example.demo.servises;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.*;
import com.example.demo.repositories.*;

@Service
public class PlanServices {

	@Autowired
	PlanRepos prepos;
	public PlanEntity savePlanDetails(PlanEntity p)
	{
		
		PlanEntity pt=new PlanEntity(p.getPlan_name(),p.getDescription(),p.getDuration(),p.getCoverage_type(),p.getPremium_amount(),p.getCompany());

		return prepos.save(pt);	
	}
	public List<PlanEntity> getPlanDetails()
	{
		return prepos.findAll();
		//return prepos.getCompanyName();
	}
	
}
