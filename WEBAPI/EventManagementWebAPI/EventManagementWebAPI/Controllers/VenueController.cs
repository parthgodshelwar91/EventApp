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
        private readonly VenueDal _adminDal;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public VenueController(VenueDal venueDal)
        {
            _adminDal = venueDal;
        }

        

        [HttpPost("addVenue")]
        public async Task<IActionResult> PostVenue(IFormFile VenueImage,string VenueName, decimal VenueCost)
        {

            try
            {
                if (VenueImage == null || VenueImage.Length == 0)
                    return BadRequest("No file uploaded.");

                // Define a folder to store uploaded files (create if not exists)
                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                // Generate a unique file name to prevent overwriting
                string uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(VenueImage.FileName);
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                // Save the file to the server
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await VenueImage.CopyToAsync(fileStream);
                }

                // Save file path to the database
                //var fileData = new FileData
                //{
                //    FilePath = filePath,
                //    FileName = uniqueFileName, // Save the unique file name if needed
                //    UploadTime = DateTime.Now // Optionally, save upload time
                //};
                //_dbHelper.InsertFileData(fileData);

                var VenueData = new Venue
                {
                    VName = VenueName,
                    VenueCost = VenueCost,
                    VenueImagePath = filePath
                };
                await _adminDal.InsertVenue(VenueData);



                //Venue v = ();




                return Ok("File uploaded successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            }




        

        }
    }
}
