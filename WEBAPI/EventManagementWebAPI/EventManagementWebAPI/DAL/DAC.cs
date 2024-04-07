using EventManagementWebAPI.Models;
using System.Data;
using System.Data.SqlClient;
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
            using SqlConnection connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();

            SqlCommand command = connection.CreateCommand();
            command.CommandType = CommandType.Text;
            command.CommandText = "INSERT INTO Registration (Name,Country,MobileNumber,Email,Username,Password,ConfirmPassword,Gender,Birthdate,RoleId) VALUES (@Name,@Country,@MobileNumber,@Email,@Username,@Password,@ConfirmPassword,@Gender,@Birthdate,1)";
            command.Parameters.AddWithValue("@Name", user.Name);
            command.Parameters.AddWithValue("@Country", user.Country);
            command.Parameters.AddWithValue("@MobileNumber", user.MobileNumber);
            command.Parameters.AddWithValue("@Email", user.Email);
            command.Parameters.AddWithValue("@Username", user.UserName);
            command.Parameters.AddWithValue("@Password", user.Password);
            command.Parameters.AddWithValue("@ConfirmPassword", user.ConfirmPassword);
            command.Parameters.AddWithValue("@Gender", user.Gender);
            command.Parameters.AddWithValue("@Birthdate", user.Birthdate);


            await command.ExecuteNonQueryAsync();
        }
        public async Task<bool> ValidateUserCredentials(string username,string password) { 

            return true;
        }
    }
}
