using EventManagementWebAPI.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.Text;
using System.Security.Cryptography;
using EventManagementWebAPI.Models;


namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DAC _dac;

        public LoginController(DAC dac)
        {
            _dac = dac;
        }
        [HttpGet("login")]
        public async Task<IActionResult> Login(string username, string password) {
            string hashedPassword = HashPassword(password);

            // Check if the username and hashed password match a user in the database
            User isAuthenticated = await _dac.ValidateUserCredentials(username , hashedPassword);

            if (isAuthenticated!=null)
            {
                return Ok("Login SucessFully");
            }
            else
            {
                return Unauthorized("Invalid username or password.");
            }

        }
        private string HashPassword(string password)
        {
            using SHA256 sha256 = SHA256.Create();
        byte[] hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));

        StringBuilder builder = new StringBuilder();
            for (int i = 0; i<hashedBytes.Length; i++)
            {
                builder.Append(hashedBytes[i].ToString("x2"));
            }

            return builder.ToString();
        }

    }
}
