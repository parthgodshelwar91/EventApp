using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetAllVenuesController : ControllerBase
    {

        private readonly VenueRepository _venueRepository;
        public GetAllVenuesController(VenueRepository venueRepository)
        {
            _venueRepository = venueRepository;
        }

        [HttpGet("allVenues")]
        public ActionResult<List<Venue>> GetAllVenues()
        {
            List<Venue> venues = _venueRepository.GetAllVenues();
            return Ok(venues);
        }
    }
}
