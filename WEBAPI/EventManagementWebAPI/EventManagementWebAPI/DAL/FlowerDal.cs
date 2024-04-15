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
    }
}
