package com.example.demo.servises;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository lrepo;
	
	
	public Login getLogin(String email, String password) {
		Login l;
		Optional<Login> ol = lrepo.getLogin(email, password);
		try {
			l = ol.get();
		}
		catch (Exception e) {
			l=null;
		}
		return l;
	}

	public List<Login> getAllDeailsAboutLogins() {
		
		return lrepo.findAll();
	}
	
	
	public List<Login> getUser()
	{
		return lrepo.findAll();
	}
	
	public String getUser(String email,String password)
	{
		return lrepo.getUser(email,password);
	}
	
}
