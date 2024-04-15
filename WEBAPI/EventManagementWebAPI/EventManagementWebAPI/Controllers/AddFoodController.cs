using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddFoodController : ControllerBase
    {
        private readonly FoodDal _foodDal;

        public AddFoodController(FoodDal foodDal)
        {
            _foodDal = foodDal;
        }
        [HttpPost("addFood")]
        public async Task<IActionResult> InsertFood(int FoodType, int MealType,int  DishType, string DishName,IFormFile DishImage,decimal DishCost)
        {
            try
            {
                if (DishImage == null || DishImage.Length == 0)
                    return BadRequest("No file uploaded.");

                string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");

                if (!Directory.Exists(uploadsFolder))
                    Directory.CreateDirectory(uploadsFolder);

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(DishImage.FileName);
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await DishImage.CopyToAsync(fileStream);
                }

                var foodData = new Food
                {
                  FoodType  =FoodType,
                  MealType = MealType,
                    DishType = DishType,
                    DishName = DishName,
                    DishImage = filePath,
                    DishCost= DishCost,
                };

                await _foodDal.InsertFood(foodData);

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
