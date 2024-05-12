using EventManagementWebAPI.DAL;
using EventManagementWebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventManagementWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {

        private readonly EventsRepository _eventsRepository;

        public EventsController(EventsRepository eventsRepository)
        {
            _eventsRepository = eventsRepository;
        }

        [HttpGet("allEvents")]
        public async Task<ActionResult<List<Events>>> GetAllEvents()
        {
            try
            {
                List<Events> events = await _eventsRepository.GetAllEvents();
                return Ok(events);
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
