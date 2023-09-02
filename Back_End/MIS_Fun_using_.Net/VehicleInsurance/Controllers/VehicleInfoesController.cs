using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VehicleInsurance.Models;

namespace VehicleInsurance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleInfoesController : ControllerBase
    {
        private readonly VehicledataContext _context;

        public VehicleInfoesController(VehicledataContext context)
        {
            _context = context;
        }

        // GET: api/VehicleInfoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VehicleInfo>>> GetVehicleInfos()
        {
          if (_context.VehicleInfos == null)
          {
              return NotFound();
          }
            return await _context.VehicleInfos.ToListAsync();
        }

        // GET: api/VehicleInfoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VehicleInfo>> GetVehicleInfo(int id)
        {
          if (_context.VehicleInfos == null)
          {
              return NotFound();
          }
            var vehicleInfo = await _context.VehicleInfos.FindAsync(id);

            if (vehicleInfo == null)
            {
                return NotFound();
            }

            return vehicleInfo;
        }

        // PUT: api/VehicleInfoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicleInfo(int id, VehicleInfo vehicleInfo)
        {
            if (id != vehicleInfo.VId)
            {
                return BadRequest();
            }

            _context.Entry(vehicleInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/VehicleInfoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<VehicleInfo>> PostVehicleInfo(VehicleInfo vehicleInfo)
        {
          if (_context.VehicleInfos == null)
          {
              return Problem("Entity set 'VehicledataContext.VehicleInfos'  is null.");
          }
            _context.VehicleInfos.Add(vehicleInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVehicleInfo", new { id = vehicleInfo.VId }, vehicleInfo);
        }

        // DELETE: api/VehicleInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicleInfo(int id)
        {
            if (_context.VehicleInfos == null)
            {
                return NotFound();
            }
            var vehicleInfo = await _context.VehicleInfos.FindAsync(id);
            if (vehicleInfo == null)
            {
                return NotFound();
            }

            _context.VehicleInfos.Remove(vehicleInfo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VehicleInfoExists(int id)
        {
            return (_context.VehicleInfos?.Any(e => e.VId == id)).GetValueOrDefault();
        }
    }
}
