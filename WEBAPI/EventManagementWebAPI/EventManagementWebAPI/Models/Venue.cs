namespace EventManagementWebAPI.Models
{
    public class Venue
    {

       
            public int VenueId { get; set; }
            public string VName { get; set; }
            public decimal VenueCost { get; set; }
            //public IFormFile VenueImage { get; set; } 
            public string VenueImagePath { get; set; }

           
        

    }
}
