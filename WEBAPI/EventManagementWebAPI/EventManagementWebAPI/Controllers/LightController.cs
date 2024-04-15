using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LightController : ControllerBase
    {
        private readonly LightDal _lightDal;

        public LightController(LightDal lightDal)
        {
            _lightDal = lightDal;
        }

        [HttpPost("addlight")]
        public async Task<IActionResult> InsertFlowers(IFormFile LightImage, string LName, decimal LightCost,int LightType)
        {
            try
            {
                if (LightImage == null || LightImage.Length == 0)
                    return BadRequest("No file uploaded.");

                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(LightImage.FileName);
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await LightImage.CopyToAsync(fileStream);
                }

                var lightData = new Light
                {LightType= LightType,
                    LName = LName,
                    LightCost = LightCost,
                    LightImage = filePath,
                };

                await _lightDal.InsertLight(lightData);

                return Ok("Flower inserted successfully.");
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error: " + ex.Message);
            }
        }


    }
}
