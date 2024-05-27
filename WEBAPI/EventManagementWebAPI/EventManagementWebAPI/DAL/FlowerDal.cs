using EventManagementWebAPI.Models;
using System.Data;

using System.Data.SqlClient;
using System.Threading.Tasks;

namespace EventManagementWebAPI.DAL
{
    public class FlowerDal
    {

        private readonly string _connectionString;

        public FlowerDal(string connectionString)
        {
            _connectionString = connectionString;
        }

        
      
        public async Task InsertFlowers(Flower flower)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure; // Specify command type as stored procedure
                command.CommandText = "insertFlowers";


                // Set parameters
                command.Parameters.AddWithValue("@FName", flower.FName);
                command.Parameters.AddWithValue("@FlowerCost", flower.FlowerCost);
                command.Parameters.AddWithValue("@FlowerImage", flower.FlowerImagePath);

                await command.ExecuteNonQueryAsync();
            }
        }

        internal List<Flower> GetAllFlowers()
        {
          

            
                List<Flower> flower = new List<Flower>();
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    SqlCommand command = connection.CreateCommand();
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "FetchFlowers";
                    SqlDataReader reader = command.ExecuteReader();
                    while (reader.Read())
                    {


                        Flower flower1 = new Flower
                        {


                            FlowerId = (int)reader["FlowerId"],

                            FName = reader["FName"].ToString()



                        };
                        flower.Add(flower1);
                    }


                }
                return flower;
            
        }

        internal async Task InsertBookingflowers(string flowerID, string createdBy, int bookingID)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                using (SqlCommand command = connection.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "InsertBookingFlower";

                    command.Parameters.AddWithValue("@FlowerIDs", flowerID);
                    command.Parameters.AddWithValue("@CreatedBy", createdBy);
                    command.Parameters.AddWithValue("@BookingID", bookingID);

                   int count= await command.ExecuteNonQueryAsync();
                }
            }
        }
    }
}
