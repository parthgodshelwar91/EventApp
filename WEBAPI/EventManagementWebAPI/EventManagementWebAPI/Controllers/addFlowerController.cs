using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class addFlowerController : ControllerBase
    {

        private readonly ADMINDAL _adminDal;

        public addFlowerController(ADMINDAL adminDal)
        {
            _adminDal = adminDal;
        }
        [HttpPost("addflower")]
        public async Task<IActionResult> InsertFlowers([FromBody] Flower flower)
        {
            await _adminDal.InsertFlowers(flower);

            return Ok("Venue created successfully.");

        }
    }
}
