﻿namespace EventManagementWebAPI.Models
{
    public class User
    {
        public string Name { get; set; }
        public string Country { get; set; }
        public string MobileNumber { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Gender{ get; set; }
        public DateTime Birthdate { get; set; }

        
    }
}
