using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentController : ControllerBase
    {


        private readonly ADMINDAL _adminDal;

        public EquipmentController(ADMINDAL adminDal)
        {
            _adminDal = adminDal;
        }
        [HttpPost("addEquipment")]
        public async Task<IActionResult> PostVenue([FromBody]Equipment equipment)
        {
            await _adminDal.InsertEquipment(equipment);

            return Ok("Venue created successfully.");

        }
    }
}
