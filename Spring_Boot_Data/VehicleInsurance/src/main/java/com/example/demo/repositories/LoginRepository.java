package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.Login;

@Repository
@Transactional
public interface LoginRepository extends JpaRepository<Login, Integer> {

	@Query("select l from Login l where l.email=?1 and l.password=?2 ")
	public Optional<Login> getLogin(String email, String password);
	
	//select l from Login l where email= :email password= :password
	@Query("select user_type from Login l where l.email=?1 and l.password=?2 ")
	public String getUser(String email,String password);
	
}
