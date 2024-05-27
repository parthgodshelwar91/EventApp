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

        internal async Task<List<Food>> GetAllFoodDishes(int FoodType,int MealType,int DishType)
        {
          
                List<Food> foods = new List<Food>();
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    SqlCommand command = connection.CreateCommand();
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "fetchFoodBytype";
                command.Parameters.AddWithValue("@FoodType", FoodType);
                command.Parameters.AddWithValue("@MealTime", MealType);
                command.Parameters.AddWithValue("@DishType", DishType);
                SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {


                    Food food = new Food
                    {


                        FoodID = (int)reader["FoodID"],

                        DishName = reader["DishName"].ToString()



                        };
                    foods.Add(food);
                    }


                }
                return foods;
            
        }

        internal async Task InsertBookFood(BookFoodModel model)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "BookFood";

                    command.Parameters.AddWithValue("@FoodType", model.FoodType);
                    command.Parameters.AddWithValue("@MealType", model.MealType);
                    command.Parameters.AddWithValue("@DishType", model.DishType);
                    command.Parameters.AddWithValue("@DishName", model.DishName);
                    command.Parameters.AddWithValue("@Createdby", model.CreatedBy);
                    command.Parameters.AddWithValue("@BookingID", model.BookingID);

                    await command.ExecuteNonQueryAsync();
                }
            }
        }
    }
}

