using System;
using System.Collections.Generic;

namespace VehicleInsurance.Models;

public partial class VehicleInfo
{
    public int VId { get; set; }

    public string VehicleNo { get; set; } = null!;

    public string BrandName { get; set; } = null!;

    public string Model { get; set; } = null!;

    public int ChassisNo { get; set; }

    public string YearOfManufacture { get; set; } = null!;

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();
}
