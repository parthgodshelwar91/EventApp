using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegisterController : ControllerBase
    {
        private readonly DAC _dac;

        public UserRegisterController(DAC dac)
        {
            _dac = dac;
        }

        [HttpPost("register")]
        public async Task<ActionResult> InsertUser(User user)
        {
            try
            {
                if (user == null)
                {
                    return BadRequest("User data is null.");
                }

                if (user.Password != user.ConfirmPassword)
                {
                    return BadRequest("Password and confirm password do not match.");
                }

                string hashedPassword = HashPassword(user.Password);
                string hashPasswordRe = HashPassword(user.ConfirmPassword);
                user.Password = hashedPassword;
                user.ConfirmPassword
                    = hashPasswordRe;
                // Assuming your DAC method returns a Task and handles database insertion
                await _dac.insert(user);

                return Ok("User registered successfully.");
            }
            catch (Exception ex)
            {
                // Log the exception or handle it appropriately
                return StatusCode(StatusCodes.Status500InternalServerError, "Internal server error: " + ex.Message);
            }
        }

        private string HashPassword(string password)
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
    }
}
