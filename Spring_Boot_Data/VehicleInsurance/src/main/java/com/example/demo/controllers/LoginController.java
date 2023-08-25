package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.servises.LoginService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class LoginController {

	@Autowired
	LoginService lser;
	
	@PostMapping("/checklogin")
	public Login checkLogin(@RequestBody LoginCheck lcheck) {
		return lser.getLogin(lcheck.getEmail(), lcheck.getPassword());
	}
	
	
	
	
	
	@PostMapping("/getAllDeailsAboutLogins")
	public List<Login> getAllDeailsAboutLogins(){
		return lser.getAllDeailsAboutLogins();
	}
	
	@GetMapping("/getallusers")
	public List<Login> getAllCategory()
	{
		return lser.getUser();
	}
	
	@PostMapping("/login")
	public String getUser(@RequestBody LoginCheck idpass)
	{
		return lser.getUser(idpass.getEmail(),idpass.getPassword());
	}
	
}
