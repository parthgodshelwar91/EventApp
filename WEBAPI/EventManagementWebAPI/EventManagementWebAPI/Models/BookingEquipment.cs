namespace EventManagementWebAPI.Models
{
    public class BookingEquipment
    {
        public int BookingEquipmentID { get; set; }

        public string EquipmentID { get; set; }
        public string CreatedBy { get; set; }
        public int BookingID { get; set; }
    }
}
