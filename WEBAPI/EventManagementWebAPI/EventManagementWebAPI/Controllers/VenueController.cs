using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VenueController : ControllerBase
    {
        private readonly ADMINDAL _adminDal;

        public VenueController(ADMINDAL adminDal)
        {
            _adminDal = adminDal;
        }
        [HttpPost("addVenue")]
        public async Task<IActionResult> PostVenue([FromBody] Venue venue)
        {
            await _adminDal.InsertVenue(venue);

            return Ok("Venue created successfully.");

        }
    }
}
