using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace VehicleInsurance.Models;

public partial class VehicledataContext : DbContext
{
    public VehicledataContext()
    {
    }

    public VehicledataContext(DbContextOptions<VehicledataContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Company> Companies { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Plan> Plans { get; set; }

    public virtual DbSet<PolicyDetail> PolicyDetails { get; set; }

    public virtual DbSet<VehicleInfo> VehicleInfos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=vehicledata", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Company>(entity =>
        {
            entity.HasKey(e => e.CompId).HasName("PRIMARY");

            entity.ToTable("company");

            entity.HasIndex(e => e.ContactNo, "contact_no").IsUnique();

            entity.HasIndex(e => e.LicenseNo, "license_no").IsUnique();

            entity.HasIndex(e => e.LoginId, "login_id");

            entity.Property(e => e.CompId).HasColumnName("comp_id");
            entity.Property(e => e.Address)
                .HasMaxLength(50)
                .HasColumnName("address");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(25)
                .HasColumnName("company_name");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(12)
                .HasColumnName("contact_no");
            entity.Property(e => e.Email)
                .HasMaxLength(150)
                .HasColumnName("email");
            entity.Property(e => e.LicenseNo)
                .HasMaxLength(50)
                .HasColumnName("license_no");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Password)
                .HasMaxLength(20)
                .HasColumnName("password");

            entity.HasOne(d => d.Login).WithMany(p => p.Companies)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("company_ibfk_1");
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.CustId).HasName("PRIMARY");

            entity.ToTable("customer");

            entity.HasIndex(e => e.Email, "email").IsUnique();

            entity.HasIndex(e => e.LoginId, "login_id");

            entity.HasIndex(e => e.VId, "v_id");

            entity.Property(e => e.CustId).HasColumnName("cust_id");
            entity.Property(e => e.Bdate)
                .HasMaxLength(20)
                .HasColumnName("bdate");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(10)
                .HasColumnName("contact_no");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasColumnName("email");
            entity.Property(e => e.LoginId).HasColumnName("login_id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(20)
                .HasColumnName("password");
            entity.Property(e => e.VId).HasColumnName("v_id");

            entity.HasOne(d => d.Login).WithMany(p => p.Customers)
                .HasForeignKey(d => d.LoginId)
                .HasConstraintName("customer_ibfk_1");

            entity.HasOne(d => d.VIdNavigation).WithMany(p => p.Customers)
                .HasForeignKey(d => d.VId)
                .HasConstraintName("customer_ibfk_2");
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("login");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasColumnName("email");
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .HasColumnName("password");
            entity.Property(e => e.UserType).HasColumnName("user_type");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.PaymentId).HasName("PRIMARY");

            entity.ToTable("payment");

            entity.HasIndex(e => e.CompId, "comp_id");

            entity.HasIndex(e => e.CustId, "cust_id");

            entity.Property(e => e.PaymentId).HasColumnName("payment_id");
            entity.Property(e => e.Amount)
                .HasPrecision(10, 2)
                .HasColumnName("amount");
            entity.Property(e => e.CompId).HasColumnName("comp_id");
            entity.Property(e => e.CustId).HasColumnName("cust_id");
            entity.Property(e => e.PaymentDate).HasColumnName("payment_date");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .HasColumnName("status");

            entity.HasOne(d => d.Comp).WithMany(p => p.Payments)
                .HasForeignKey(d => d.CompId)
                .HasConstraintName("payment_ibfk_2");

            entity.HasOne(d => d.Cust).WithMany(p => p.Payments)
                .HasForeignKey(d => d.CustId)
                .HasConstraintName("payment_ibfk_1");
        });

        modelBuilder.Entity<Plan>(entity =>
        {
            entity.HasKey(e => e.PlanId).HasName("PRIMARY");

            entity.ToTable("plan");

            entity.HasIndex(e => e.CompId, "comp_id");

            entity.Property(e => e.PlanId).HasColumnName("plan_id");
            entity.Property(e => e.CompId).HasColumnName("comp_id");
            entity.Property(e => e.CoverageType)
                .HasMaxLength(50)
                .HasColumnName("coverage_type");
            entity.Property(e => e.Description)
                .HasMaxLength(255)
                .HasColumnName("description");
            entity.Property(e => e.Duration)
                .HasDefaultValueSql("'1'")
                .HasColumnName("duration");
            entity.Property(e => e.PlanName)
                .HasMaxLength(50)
                .HasColumnName("plan_name");
            entity.Property(e => e.PremiumAmount)
                .HasPrecision(10, 2)
                .HasColumnName("premium_amount");

            entity.HasOne(d => d.Comp).WithMany(p => p.Plans)
                .HasForeignKey(d => d.CompId)
                .HasConstraintName("plan_ibfk_1");
        });

        modelBuilder.Entity<PolicyDetail>(entity =>
        {
            entity.HasKey(e => e.PolicyId).HasName("PRIMARY");

            entity.ToTable("policy_details");

            entity.HasIndex(e => e.CustId, "cust_id");

            entity.HasIndex(e => e.PlanId, "plan_id");

            entity.Property(e => e.PolicyId).HasColumnName("policy_id");
            entity.Property(e => e.CustId).HasColumnName("cust_id");
            entity.Property(e => e.PlanId).HasColumnName("plan_id");

            entity.HasOne(d => d.Cust).WithMany(p => p.PolicyDetails)
                .HasForeignKey(d => d.CustId)
                .HasConstraintName("policy_details_ibfk_2");

            entity.HasOne(d => d.Plan).WithMany(p => p.PolicyDetails)
                .HasForeignKey(d => d.PlanId)
                .HasConstraintName("policy_details_ibfk_1");
        });

        modelBuilder.Entity<VehicleInfo>(entity =>
        {
            entity.HasKey(e => e.VId).HasName("PRIMARY");

            entity.ToTable("vehicle_info");

            entity.HasIndex(e => e.ChassisNo, "chassis_no").IsUnique();

            entity.HasIndex(e => e.VehicleNo, "vehicle_no").IsUnique();

            entity.Property(e => e.VId).HasColumnName("v_id");
            entity.Property(e => e.BrandName)
                .HasMaxLength(255)
                .HasColumnName("brand_name");
            entity.Property(e => e.ChassisNo).HasColumnName("chassis_no");
            entity.Property(e => e.Model)
                .HasMaxLength(255)
                .HasColumnName("model");
            entity.Property(e => e.VehicleNo)
                .HasMaxLength(20)
                .HasColumnName("vehicle_no");
            entity.Property(e => e.YearOfManufacture)
                .HasMaxLength(50)
                .HasColumnName("year_of_manufacture");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
