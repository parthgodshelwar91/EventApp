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
        private readonly IWebHostEnvironment _webHostEnvironment;
        public VenueController(ADMINDAL adminDal)
        {
            _adminDal = adminDal;
        }

        

        [HttpPost("addVenue")]
        public async Task<IActionResult> PostVenue([FromBody] Venue venue)
        {
            string filename = "";
           
            if (venue.VenueImage != null)
            {

                string folder = Path.Combine(_webHostEnvironment.ContentRootPath, "images");
                filename=Guid.NewGuid().ToString()+"_"+venue.VenueImage.FileName;
                string filePath=Path.Combine(folder, filename);
                venue.VenueImage.CopyTo(new FileStream(filePath,FileMode.Create));
                Venue1  v = new Venue1(){
                       VenueId=venue.VenueId,
                    VName = venue.VName,
                   
                    VenueCost = venue.VenueCost,
                    VenueImage= filename,


                };
                await _adminDal.InsertVenue(v);
            }
           

            return Ok("Venue created successfully.");

        }
    }
}
