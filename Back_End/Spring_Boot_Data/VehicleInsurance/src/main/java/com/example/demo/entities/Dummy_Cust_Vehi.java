package com.example.demo.entities;



public class Dummy_Cust_Vehi {
	String vehicle_no;
	String brand_name;
	String model;
	int chassis_no;
	String year_of_manufacture;
	String name;
	String password;
	String contact_no;
	String email;
	String bdate;
	
	
	public Dummy_Cust_Vehi() {
		super();
	}

	public Dummy_Cust_Vehi(String vehicle_no, String brand_name, String model, int chassis_no, String year_of_manufacture,
			String name, String password, String contact_no, String email, String bdate) {
		super();
		this.vehicle_no = vehicle_no;
		this.brand_name = brand_name;
		this.model = model;
		this.chassis_no = chassis_no;
		this.year_of_manufacture = year_of_manufacture;
		this.name = name;
		this.password = password;
		this.contact_no = contact_no;
		this.email = email;
		this.bdate = bdate;
		
	}

	public String getVehicle_no() {
		return vehicle_no;
	}

	public void setVehicle_no(String vehicle_no) {
		this.vehicle_no = vehicle_no;
	}

	public String getBrand_name() {
		return brand_name;
	}

	public void setBrand_name(String brand_name) {
		this.brand_name = brand_name;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getChassis_no() {
		return chassis_no;
	}

	public void setChassis_no(int chassis_no) {
		this.chassis_no = chassis_no;
	}

	public String getYear_of_manufacture() {
		return year_of_manufacture;
	}

	public void setYear_of_manufacture(String year_of_manufacture) {
		this.year_of_manufacture = year_of_manufacture;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBdate() {
		return bdate;
	}

	public void setBdate(String bdate) {
		this.bdate = bdate;
	}

	
	
	
}
