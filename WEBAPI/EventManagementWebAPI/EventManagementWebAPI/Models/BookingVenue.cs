namespace EventManagementWebAPI.Models
{
    public class BookingVenue
    {

        public int BookingVenueID { get; set; }
        public Nullable<int> VenueID { get; set; }
        public Nullable<int> EventTypeID { get; set; }
        public Nullable<int> GuestCount { get; set; }
        public Nullable<int> Createdby { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<int> BookingID { get; set; }
    }
}
