using EventManagementWebAPI.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;


namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForgotPasswordController : ControllerBase
    {
        private readonly ForgotPassword _forgotPasswordDAL;

    public  ForgotPasswordController(ForgotPassword forgotPasswordDAL) {
            _forgotPasswordDAL = forgotPasswordDAL;

        }
        [HttpPost("forgotPassword")]
        public IActionResult ResetPassword(string username, string email, string password, string retypePassword)
        {
            try
            {
                // Check if username and email exist in the database
                if (!_forgotPasswordDAL.UserExists(username, email))
                {
                    return NotFound("User not found.");
                }

                // Check if password and retypePassword match
                if (password != retypePassword)
                {
                    return BadRequest("Passwords do not match.");
                }

                // Hash the password
                string hashedPassword = HashPassword(password);
                string retypehashedPassword= HashPassword(retypePassword);

                // Update the password in the database
                _forgotPasswordDAL.UpdatePassword(username, hashedPassword, retypehashedPassword);

                return Ok("Password updated successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
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
