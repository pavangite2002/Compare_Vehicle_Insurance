package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
@Table(name="customer")

public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int  cust_id;
	
	@Column
	private String name;
	
	@Column
	private String password;
	
	@Column
	private String contact_no;
	
	@Column
	private String email;
	
	@Column
	private String bdate;
	
	@OneToOne
	@Cascade(CascadeType.ALL)
	@JoinColumn(name = "v_id")
	VehicleInfo vinfo;
	
	@OneToOne 
	@Cascade(CascadeType.ALL)
	@JoinColumn(name = "login_id")
	Login login;

		
	public Customer() {
		super();
	}


	public Customer(int cust_id, String name, String password, String contact_no, String email, String bdate,
			VehicleInfo vinfo, Login login) {
		super();
		this.cust_id = cust_id;
		this.name = name;
		this.password = password;
		this.contact_no = contact_no;
		this.email = email;
		this.bdate = bdate;
		this.vinfo = vinfo;
		this.login = login;
	}

	
	
	public Customer(String name, String password, String contact_no, String email, String bdate, VehicleInfo vinfo,
			Login login) {
		super();
		this.name = name;
		this.password = password;
		this.contact_no = contact_no;
		this.email = email;
		this.bdate = bdate;
		this.vinfo = vinfo;
		this.login = login;
	}

	
	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
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

	public VehicleInfo getVinfo() {
		return vinfo;
	}

	public void setVinfo(VehicleInfo vinfo) {
		this.vinfo = vinfo;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}
	
	
	
	
	
}
