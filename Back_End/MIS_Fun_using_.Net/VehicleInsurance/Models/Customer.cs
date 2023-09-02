using System;
using System.Collections.Generic;

namespace VehicleInsurance.Models;

public partial class Customer
{
    public int CustId { get; set; }

    public int? LoginId { get; set; }

    public string Name { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string ContactNo { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Bdate { get; set; }

    public int? VId { get; set; }

    public virtual Login? Login { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<PolicyDetail> PolicyDetails { get; set; } = new List<PolicyDetail>();

    public virtual VehicleInfo? VIdNavigation { get; set; }
}
