using System;
using System.Collections.Generic;

namespace VehicleInsurance.Models;

public partial class Plan
{
    public int PlanId { get; set; }

    public string PlanName { get; set; } = null!;

    public string? Description { get; set; }

    public int? CompId { get; set; }

    public int? Duration { get; set; }

    public string CoverageType { get; set; } = null!;

    public decimal PremiumAmount { get; set; }

    public virtual Company? Comp { get; set; }

    public virtual ICollection<PolicyDetail> PolicyDetails { get; set; } = new List<PolicyDetail>();
}
