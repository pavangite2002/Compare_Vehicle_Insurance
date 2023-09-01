using System;
using System.Collections.Generic;

namespace VehicleInsurance.Models;

public partial class Company
{
    public int CompId { get; set; }

    public int? LoginId { get; set; }

    public string CompanyName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string ContactNo { get; set; } = null!;

    public string LicenseNo { get; set; } = null!;

    public virtual Login? Login { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Plan> Plans { get; set; } = new List<Plan>();
}
