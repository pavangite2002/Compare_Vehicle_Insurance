package com.example.demo.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.PlanEntity;
import com.example.demo.entities.*;
@Repository
public interface PlanRepos extends JpaRepository<PlanEntity, Integer> {

//	@Query(value = "select c.company_name,p.plan_name,p.description,p.coverage_type,p.premium_amount from company c,plan p where c.comp_id=p.comp_id",nativeQuery = true)
//	public List<PlanEntity> getCompanyName();
	
//    @Query("SELECT p FROM PlanEntity p JOIN p.company c WHERE c.comp_Id = p.comp_Id")
//	public List<PlanEntity> getCompanyName();

	
}
