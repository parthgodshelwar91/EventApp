using System.Data;
using System.Data.SqlClient;
using EventManagementWebAPI.Models;
using Microsoft.Extensions.Configuration;

namespace EventManagementWebAPI.DAL
{
    public class VenueRepository
    {
        private readonly string _connection;

        public VenueRepository(string connection)
        {
            _connection = connection;
        }
        public List<Venue> GetAllVenues()
        {
            List<Venue> venues = new List<Venue>();

            using (SqlConnection connection = new SqlConnection(_connection))
            {
                connection.Open();

                SqlCommand command = connection.CreateCommand();
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "GetAllVenueNames";

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Venue venue = new Venue
                        {
                            VenueId = (int)reader["VenueId"],

                            VName = reader["VName"].ToString()
                            
                            
                        };

                        venues.Add(venue);
                    }
                }
            }

            return venues;
        }

    }
}
