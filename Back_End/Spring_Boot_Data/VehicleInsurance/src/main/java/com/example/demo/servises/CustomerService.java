package com.example.demo.servises;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Dummy_Cust_Vehi;
import com.example.demo.entities.Login;
import com.example.demo.entities.VehicleInfo;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.LoginRepository;
import com.example.demo.repositories.VehicleInfoRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository crepo;
	
	@Autowired
	VehicleInfoRepository vinforepo;

	@Autowired
	LoginRepository lrepo;
	
	@PostMapping("/getallcustomers")
	public List<Customer> getAllCustomers() {
		
		return crepo.findAll();
	}
	
	
	public Customer saveCustomer(Customer c) {
		return crepo.save(c);
	}
	
	
	public void save(Dummy_Cust_Vehi dcv) {
		VehicleInfo vinfo = new VehicleInfo(dcv.getVehicle_no(), dcv.getBrand_name(), dcv.getModel(), dcv.getChassis_no(), dcv.getYear_of_manufacture());
		
		Login lg = new Login(dcv.getEmail(), dcv.getPassword(), 0);
		
		Customer c = new Customer(dcv.getName(), dcv.getPassword(), dcv.getContact_no(), dcv.getEmail(), dcv.getBdate(), vinfo, lg);
		
		crepo.save(c);
	}
	
}
