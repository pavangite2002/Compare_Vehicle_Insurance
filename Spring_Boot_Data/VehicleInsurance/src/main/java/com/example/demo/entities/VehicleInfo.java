package com.example.demo.entities;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vehicle_info")
public class VehicleInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int v_id;
	
	@Column
	String vehicle_no;
	
	@Column
	String brand_name;
	
	@Column
	String model;
	
	@Column
	int chassis_no;
	
	@Column
	String year_of_manufacture;

	public VehicleInfo() {
		super();
	}

	public VehicleInfo(int v_id, String vehicle_no, String brand_name, String model, int chassis_no,
			String year_of_manufacture) {
		super();
		this.v_id = v_id;
		this.vehicle_no = vehicle_no;
		this.brand_name = brand_name;
		this.model = model;
		this.chassis_no = chassis_no;
		this.year_of_manufacture = year_of_manufacture;
	}
	

	public VehicleInfo(String vehicle_no, String brand_name, String model, int chassis_no, String year_of_manufacture) {
		super();
		this.vehicle_no = vehicle_no;
		this.brand_name = brand_name;
		this.model = model;
		this.chassis_no = chassis_no;
		this.year_of_manufacture = year_of_manufacture;
	}

	public int getV_id() {
		return v_id;
	}

	public void setV_id(int v_id) {
		this.v_id = v_id;
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
	
	
	
}
