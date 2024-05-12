using EventManagementWebAPI.Models;
using System.Data;
using System.Data.SqlClient;
using System.Reflection.PortableExecutable;
using System.Threading.Tasks;


namespace EventManagementWebAPI.DAL
{
    public class DAC
    {
        private readonly string _connectionString;

        public DAC(string connectionString) { 
            _connectionString = connectionString;
        }




        public async Task<int> insert(User user)
        {
            try
            { 
                
                using (SqlConnection connection = new SqlConnection(_connectionString))
                {
                    await connection.OpenAsync();

                    SqlCommand command = connection.CreateCommand();
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "USP_Ins_Registration";
                    command.Parameters.AddWithValue("@Name", user.Name);
                    command.Parameters.AddWithValue("@Country", user.Country);
                    command.Parameters.AddWithValue("@MobileNumber", user.MobileNumber);
                    command.Parameters.AddWithValue("@Email", user.Email);
                    command.Parameters.AddWithValue("@State", user.State);
                    command.Parameters.AddWithValue("@Address", user.Address);
                    command.Parameters.AddWithValue("@City", user.City);
                    command.Parameters.AddWithValue("@Username", user.UserName);
                    command.Parameters.AddWithValue("@Password", user.Password);
                    command.Parameters.AddWithValue("@ConfirmPassword", user.ConfirmPassword);
                    command.Parameters.AddWithValue("@Gender", user.Gender);
                    command.Parameters.AddWithValue("@Birthdate", user.Birthdate);
                    command.Parameters.AddWithValue("@RoleId", user.RoleId);

                    // Execute the stored procedure and retrieve the result set
                    using (SqlDataReader reader = await command.ExecuteReaderAsync())
                    {
                        if (reader.Read())
                        {
                            int insertedId = reader.GetInt32(reader.GetOrdinal("InsertedId"));
                            return insertedId;
                        }
                        else
                        {
                            throw new Exception("Failed to retrieve InsertedId.");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                throw new Exception("Error inserting user into database: " + ex.Message);
            }
        }


        public async Task<User> ValidateUserCredentials(string username,string password) {

            using SqlConnection connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            SqlCommand command = connection.CreateCommand();
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = "usp_Registration_userLogin";
            command.Parameters.AddWithValue("@Username", username);
            command.Parameters.AddWithValue("@Password", password);

            using SqlDataReader reader = await command.ExecuteReaderAsync();
            if (reader.Read())
            {
                // User exists and credentials match
                User user = new User
                { Name= reader.GetString(reader.GetOrdinal("Username")),
         Country= reader.GetString(reader.GetOrdinal("Country")),
        MobileNumber= reader.GetString(reader.GetOrdinal("MobileNumber")),
        Email= reader.GetString(reader.GetOrdinal("Email")),
         UserName= reader.GetString(reader.GetOrdinal("UserName")),
        Password= reader.GetString(reader.GetOrdinal("Password")),
       ConfirmPassword= reader.GetString(reader.GetOrdinal("ConfirmPassword")),
        Gender= reader.GetString(reader.GetOrdinal("Gender")),
         Birthdate= reader.GetDateTime(reader.GetOrdinal("Birthdate")),
        Id = reader.GetInt32(reader.GetOrdinal("Id")),
                    RoleName = reader.GetString(reader.GetOrdinal("RoleName")),
                    // Other properties you may need
                };

                return user;
            }

            return null;
        }

        public async Task<bool> IsEmailOrUsernameInUse(string email, string username)
        {
            using SqlConnection connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            SqlCommand command = connection.CreateCommand();
            command.CommandType = CommandType.Text;
            command.CommandText = "SELECT COUNT(*) FROM Registration WHERE Email = @Email OR Username = @Username";
            command.Parameters.AddWithValue("@Email", email);
            command.Parameters.AddWithValue("@Username", username);

            int count = (int)await command.ExecuteScalarAsync();

            return count > 0; // Return true if email or username is already in use
        }
    }
}
