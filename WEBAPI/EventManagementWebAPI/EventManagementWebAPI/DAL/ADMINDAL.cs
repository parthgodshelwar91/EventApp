using EventManagementWebAPI.Models;
using System.Data;

using System.Data.SqlClient;
using System.Threading.Tasks;

namespace EventManagementWebAPI.DAL
{
    public class ADMINDAL
    {

        private readonly string _connectionString;

        public ADMINDAL(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task InsertVenue(Venue1 venue)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = "INSERT INTO Venue (VName, VenueCost, VenueImage) VALUES (@VName, @VenueCost, @VenueImage)";

                // Set parameters
                command.Parameters.AddWithValue("@VName", venue.VName);
                command.Parameters.AddWithValue("@VenueCost", venue.VenueCost);
                command.Parameters.AddWithValue("@VenueImage", venue.VenueImage);

                await command.ExecuteNonQueryAsync();
            }
        }
        public async Task InsertEquipment(Equipment equipment)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = "INSERT INTO Equipment (EName, EquipmentCost,EquipmentImage) VALUES (@EName, @EquipmentCost, @EquipmentImage)";

                // Set parameters
                command.Parameters.AddWithValue("@VName", equipment.EName);
                command.Parameters.AddWithValue("@VenueCost", equipment.EquipmentCost);
                command.Parameters.AddWithValue("@EquipmentImage", equipment.EquipmentImage);

                await command.ExecuteNonQueryAsync();
            }
        }
        public async Task InsertFlowers(Flower flower)
        {
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.Text;
                command.CommandText = "INSERT INTO Equipment (FName, FlowerCost,FlowerImage) VALUES (@FName, @FlowerCost, @FlowerImage)";

                // Set parameters
                command.Parameters.AddWithValue("@FName", flower.FName);
                command.Parameters.AddWithValue("@FlowerCost", flower.FlowerCost);
                command.Parameters.AddWithValue("@FlowerImage", flower.FlowerImage);

                await command.ExecuteNonQueryAsync();
            }
        }
    }
}
