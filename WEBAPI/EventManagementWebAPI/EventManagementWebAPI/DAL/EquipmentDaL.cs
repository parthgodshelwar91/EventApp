using EventManagementWebAPI.Models;
using System.Data;
using System.Data.SqlClient;

namespace EventManagementWebAPI.DAL
{
    public class EquipmentDaL
    {

        private readonly string _connectionString;

        public EquipmentDaL(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task InsertEquipment(Equipment equipment)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure; // Specify command type as stored procedure
                command.CommandText = "insertEquipment";


                // Set parameters
                command.Parameters.AddWithValue("@EName", equipment.EName);
                command.Parameters.AddWithValue("@EquipmentCost", equipment.EquipmentCost);
                command.Parameters.AddWithValue("@EquipmentImage", equipment.EquipmentImagePath);

                await command.ExecuteNonQueryAsync();
            }
        }
    }
}
