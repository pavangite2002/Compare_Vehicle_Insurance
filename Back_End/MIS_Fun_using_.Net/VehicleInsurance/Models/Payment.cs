using System;
using System.Collections.Generic;

namespace VehicleInsurance.Models;

public partial class Payment
{
    public int PaymentId { get; set; }

    public int? CustId { get; set; }

    public int? CompId { get; set; }

    public string Status { get; set; } = null!;

    public decimal Amount { get; set; }

    public DateOnly PaymentDate { get; set; }

    public virtual Company? Comp { get; set; }

    public virtual Customer? Cust { get; set; }
}
