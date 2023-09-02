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
@Table(name = "company")
public class Company {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int  comp_id;

	    @Column
	    private String company_name;

	    @Column
	    private String email;

	    @Column
	    private String password;

	    @Column
	    private String address;

	    @Column
	    private String contact_no;

	    @Column
	    private String license_no;

	    @OneToOne
	    @JoinColumn(name = "login_id")
	    @Cascade(CascadeType.ALL)
	     Login login;

		public Company() {
			super();
		}
		
		public Company(String company_name, String email, String password, String address, String contact_no,
				String license_no, Login login) {
			super();
			this.company_name = company_name;
			this.email = email;
			this.password = password;
			this.address = address;
			this.contact_no = contact_no;
			this.license_no = license_no;
			this.login = login;
		}

		public int getComp_id() {
			return comp_id;
		}

		public void setComp_id(int comp_id) {
			this.comp_id = comp_id;
		}

		public String getCompany_name() {
			return company_name;
		}

		public void setCompany_name(String company_name) {
			this.company_name = company_name;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getAddress() {
			return address;
		}

		public void setAddress(String address) {
			this.address = address;
		}

		public String getContact_no() {
			return contact_no;
		}

		public void setContact_no(String contact_no) {
			this.contact_no = contact_no;
		}

		public String getLicense_no() {
			return license_no;
		}

		public void setLicense_no(String license_no) {
			this.license_no = license_no;
		}

		public Login getLogin() {
			return login;
		}

		public void setLogin(Login login) {
			this.login = login;
		}

	    

}
