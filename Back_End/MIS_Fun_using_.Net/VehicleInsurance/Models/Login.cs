using System;
using System.Collections.Generic;

namespace VehicleInsurance.Models;

public partial class Login
{
    public int Id { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int UserType { get; set; }

    public virtual ICollection<Company> Companies { get; set; } = new List<Company>();

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();
}
