using System;
using System.Collections.Generic;

namespace VehicleInsurance.Models;

public partial class PolicyDetail
{
    public int PolicyId { get; set; }

    public int? PlanId { get; set; }

    public int? CustId { get; set; }

    public virtual Customer? Cust { get; set; }

    public virtual Plan? Plan { get; set; }
}
