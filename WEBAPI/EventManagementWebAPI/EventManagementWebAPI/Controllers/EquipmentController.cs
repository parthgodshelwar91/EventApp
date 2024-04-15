using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipmentController : ControllerBase
    {
        private readonly EquipmentDaL _adminDal;

        public EquipmentController(EquipmentDaL adminDal)
        {
            _adminDal = adminDal;
        }

        [HttpPost("addEquipment")]
        public async Task<IActionResult> PostVenue(IFormFile EquipmentImage, string EName, decimal EquipmentCost)
        {
            try
            {
                if (EquipmentImage == null || EquipmentImage.Length == 0)
                    return BadRequest("No file uploaded.");

                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(EquipmentImage.FileName);
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await EquipmentImage.CopyToAsync(fileStream);
                }

                var EquipmentData = new Equipment
                {
                    EName = EName,
                    EquipmentCost = EquipmentCost,
                    EquipmentImagePath = filePath,
                };

                await _adminDal.InsertEquipment(EquipmentData);

                return Ok("Equipment added successfully.");
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error: " + ex.Message);
            }
        }
    }
}
