using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using EventManagementWebAPI.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
namespace EventManagementWebAPI.DAL
{
    public class EventsRepository
    {
        private readonly string _connectionString;

        public EventsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<List<Events>> GetAllEvents()
        {
            List<Events> events = new List<Events>();

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();

                SqlCommand command = new SqlCommand("GetAllEvents", connection);
                command.CommandType = CommandType.StoredProcedure;

                using (SqlDataReader reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        Events evnt = new Events
                        {
                            EventID = reader.GetInt32(reader.GetOrdinal("EventID")),
                            EventType = reader.GetString(reader.GetOrdinal("EventType")),
                            Status = reader.GetInt32(reader.GetOrdinal("Status"))
                        };

                        events.Add(evnt);
                    }
                }
            }

            return events;
        }
    }
}