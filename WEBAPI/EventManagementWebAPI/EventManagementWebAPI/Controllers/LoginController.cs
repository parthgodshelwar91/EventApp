using EventManagementWebAPI.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
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
        public async Task<IActionResult> Login(string username, string password)
        {
            try
            {
                if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                {
                    return BadRequest("Username or password is empty.");
                }

                string hashedPassword = HashPassword(password);

                // Check if the username and hashed password match a user in the database
                User isAuthenticated = await _dac.ValidateUserCredentials(username, hashedPassword);

                if (isAuthenticated != null)
                {
                    return Ok("Login successfully.");
                }
                else
                {
                    return Unauthorized("Invalid username or password.");
                }
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error: " + ex.Message);
            }
        }

        private string HashPassword(string password)
        {
            try
            {
                using (SHA256 sha256 = SHA256.Create())
                {
                    byte[] hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));

                    StringBuilder builder = new StringBuilder();
                    for (int i = 0; i < hashedBytes.Length; i++)
                    {
                        builder.Append(hashedBytes[i].ToString("x2"));
                    }

                    return builder.ToString();
                }
            }
            catch (Exception ex)
            {
                // Log the hashing error or rethrow if necessary
                throw new Exception("Error occurred while hashing password.", ex);
            }
        }
    }
}
