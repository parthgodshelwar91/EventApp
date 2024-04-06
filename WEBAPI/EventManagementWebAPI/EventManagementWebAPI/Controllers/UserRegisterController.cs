using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Security.Cryptography;
using System.Reflection;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegisterController : ControllerBase
    {
        private readonly DAC dac;
        
        public UserRegisterController(DAC dac)
        {

            this.dac = dac;
        }
        [HttpPost("register")]
        public async Task<ActionResult> insert(User user)
        {
            if (user.Password != user.ConfirmPassword)
            {
                return BadRequest("Password and confirm password do not match.");
            }
            string hashedPassword = HashPassword(user.Password);
            user.Password = hashedPassword;
            string ConfirmPassword = HashPassword(user.ConfirmPassword);
            user.ConfirmPassword = ConfirmPassword;

            
            await dac.insert(user);
            return Ok("User registered successfully.");


        }


        private string HashPassword(string password)
        {
            using SHA256 sha256 = SHA256.Create();
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
