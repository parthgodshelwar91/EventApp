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


        public async Task insert(User user)
        {
            if (await IsEmailOrUsernameInUse(user.Email, user.UserName))
            {
                throw new Exception("Email or username is already in use.");
            }
            using SqlConnection connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            SqlCommand command = connection.CreateCommand();
            command.CommandType = CommandType.Text;
            command.CommandText = "INSERT INTO Registration (Name,Country,MobileNumber,Email,State,Address,City,Username,Password,ConfirmPassword,Gender,Birthdate,RoleId) VALUES (@Name,@Country,@MobileNumber,@Email,@State,@Address,@City,@Username,@Password,@ConfirmPassword,@Gender,@Birthdate,1)";
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


            await command.ExecuteNonQueryAsync();
        }
        public async Task<User> ValidateUserCredentials(string username,string password) {

            using SqlConnection connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            SqlCommand command = connection.CreateCommand();
            command.CommandType = CommandType.Text;
            command.CommandText = "SELECT * FROM Registration WHERE Username = @Username AND ConfirmPassword = @PasswordHash";
            command.Parameters.AddWithValue("@Username", username);
            command.Parameters.AddWithValue("@PasswordHash", password);

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
                    RoleId = reader.GetInt32(reader.GetOrdinal("RoleId")),
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
