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

        internal List<Equipment> GetAllEquipments()

        {
           List<Equipment> equipments = new List<Equipment>();
            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();
                SqlCommand command = connection.CreateCommand();
                command.CommandType= CommandType.StoredProcedure;
                command.CommandText = "GetAllEquipments";
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {


                    Equipment equip = new Equipment
                    {


                        EquipmentId = (int)reader["EquipmentId"],

                        EName = reader["EName"].ToString()



                    };
                    equipments.Add(equip);
                }


            }
            return equipments;
        }

        internal async Task InsertBookingEquipment(string equipmentID, string createdBy, int bookingID)
        {
            
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    using (SqlCommand command = connection.CreateCommand())
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.CommandText = "InsertBookingEquipment";

                        command.Parameters.AddWithValue("@EquipmentID", equipmentID);
                        command.Parameters.AddWithValue("@CreatedBy", createdBy);
                        command.Parameters.AddWithValue("@BookingID", bookingID);

                        await command.ExecuteNonQueryAsync();
                    }
                }
            
        }
    }
}
