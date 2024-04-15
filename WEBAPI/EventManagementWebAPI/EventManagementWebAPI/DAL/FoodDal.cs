using EventManagementWebAPI.Models;
using System.Data;
using System.Data.SqlClient;


namespace EventManagementWebAPI.DAL
{
    public class FoodDal
    {
        private readonly string _connectionString;

        public FoodDal(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<int> InsertFood(Food food)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure; // Specify command type as stored procedure
                command.CommandText = "insertFood";

                command.Parameters.AddWithValue("@FoodType", food.FoodType);
                command.Parameters.AddWithValue("@MealType", food.MealType);
                command.Parameters.AddWithValue("@DishType", food.DishType);
                command.Parameters.AddWithValue("@DishName", food.DishName);
                command.Parameters.AddWithValue("@DishImage", food.DishImage);
                command.Parameters.AddWithValue("@DishCost", food.DishCost);

                
                return await command.ExecuteNonQueryAsync();
            }
       }
    }
}

