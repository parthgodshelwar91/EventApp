using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {

        private readonly BookingRepository _bookingRepository;

        public BookingController(BookingRepository bookingRepository)
        {
            _bookingRepository = bookingRepository;
        }

        [HttpGet("checkAvailability")]
        public IActionResult CheckBookingAvailability(DateTime bookingDate, int venueId)
        {
            try
            {
                int rowCount = _bookingRepository.CheckBookingAvailability(bookingDate, venueId);

                if (rowCount > 0)
                {
                    return Ok("NotAvailable");
                }
                else
                {
                    return Ok("Available");
                }
               
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }



        [HttpPost("Bookevent")]
       
        public IActionResult BookEvent(DateTime BookingDate,int VenueID,int EventTypeID,int GuestCount,int UserID)
        {

            try
            {
                if (BookingDate != null && VenueID != null&& EventTypeID!=null&& GuestCount !=null)
                {
                 

                    var result = _bookingRepository.BookEvent(BookingDate, VenueID, EventTypeID, GuestCount, UserID);

                   

                    if (result !=null)
                    {
                        return Ok(result);
                    }
                    else
                    {
                        return Ok("Failed");
                    }
                }
                else
                {
                    return Ok("Failed");
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}