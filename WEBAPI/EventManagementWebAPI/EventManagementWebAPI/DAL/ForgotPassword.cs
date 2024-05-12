
using System.Data;
using System.Data.SqlClient;

namespace EventManagementWebAPI.DAL
{
    public class ForgotPassword
    {
        private readonly string _connectionString;
        public ForgotPassword(string connectionString) {
            _connectionString = connectionString;

        }

   

        internal void UpdatePassword(string username, string hashedPassword, string retypehashedPassword)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (var command = connection.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "UpdatePassword";
                    command.Parameters.AddWithValue("@Password", hashedPassword);
                    command.Parameters.AddWithValue("@ConfirmPassword", retypehashedPassword);

                    command.Parameters.AddWithValue("@Username", username);

                    command.ExecuteNonQuery();
                }
            }
        }

        internal bool UserExists(string username, string email)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                using (var command = connection.CreateCommand())
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "UserExists";
                    command.Parameters.AddWithValue("@Username", username);
                    command.Parameters.AddWithValue("@Email", email);

                    int count = (int)command.ExecuteScalar();
                    return count > 0;
                }
            }
        }
    }
}
