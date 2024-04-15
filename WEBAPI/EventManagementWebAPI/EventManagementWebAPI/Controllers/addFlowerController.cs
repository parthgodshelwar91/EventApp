﻿using EventManagementWebAPI.DAL;
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
    public class addFlowerController : ControllerBase
    {
        private readonly FlowerDal _adminDal;

        public addFlowerController(FlowerDal adminDal)
        {
            _adminDal = adminDal;
        }

        [HttpPost("addflower")]
        public async Task<IActionResult> InsertFlowers(IFormFile FlowerImage, string FName, decimal FlowerCost)
        {
            try
            {
                if (FlowerImage == null || FlowerImage.Length == 0)
                    return BadRequest("No file uploaded.");

                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(FlowerImage.FileName);
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await FlowerImage.CopyToAsync(fileStream);
                }

                var flowerData = new Flower
                {
                    FName = FName,
                    FlowerCost = FlowerCost,
                    FlowerImagePath = filePath,
                };

                await _adminDal.InsertFlowers(flowerData);

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
