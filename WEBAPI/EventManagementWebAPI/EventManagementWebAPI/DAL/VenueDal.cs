using EventManagementWebAPI.Models;
using System.Data;
using System.Data.SqlClient;

namespace EventManagementWebAPI.DAL
{
    public class VenueDal
    {
        private readonly string _connectionString;

        public VenueDal(string connectionString)
        {
            _connectionString = connectionString;
        }
        public async Task InsertVenue(Venue venue)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure; // Specify command type as stored procedure
                command.CommandText = "insertVenue";

                // Set parameters
                command.Parameters.AddWithValue("@VName", venue.VName);
                command.Parameters.AddWithValue("@VenueCost", venue.VenueCost);
                command.Parameters.AddWithValue("@VenueImage", venue.VenueImagePath);

                await command.ExecuteNonQueryAsync();
            }
        }
    }
}
