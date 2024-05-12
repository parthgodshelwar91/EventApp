namespace EventManagementWebAPI.Models
{
    public class BookingDetails
    {

        public int BookingID { get; set; }
        public string BookingNo { get; set; }
        public Nullable<System.DateTime> BookingDate { get; set; }
        public Nullable<int> Createdby { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public char BookingApproval { get; set; }
        public Nullable<System.DateTime> BookingApprovalDate { get; set; }
        public char BookingCompletedFlag { get; set; }
    }
}
