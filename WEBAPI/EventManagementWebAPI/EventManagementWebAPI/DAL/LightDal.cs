using EventManagementWebAPI.Models;
using System.Data;
using System.Data.SqlClient;


namespace EventManagementWebAPI.DAL
{
    public class LightDal
    {


        private readonly string _connectionString;

        public LightDal(string connectionString)
        {
            _connectionString = connectionString;
        }



        public async Task InsertLight(Light light)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure; // Specify command type as stored procedure
                command.CommandText = "insertLight";

                command.Parameters.AddWithValue("@LightType", light.LightType);

                command.Parameters.AddWithValue("@LName", light.LName);
                command.Parameters.AddWithValue("@LightCost", light.LightCost);
                command.Parameters.AddWithValue("@LightImage", light.LightImage);

                await command.ExecuteNonQueryAsync();
            }
        }
    }
}
