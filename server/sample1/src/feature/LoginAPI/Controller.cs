using Sample1.Shared.Base;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Sample1.Feature.LoginAPI
{
    public class Controller : ControllerBase
    {
        private readonly Service _service;
        private readonly ILogger<Controller> _logger;

        public Controller(Service service, ILogger<Controller> logger) : base()
        {
            _service = service;
            _logger = logger;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            try
            {
                var result = _service.Authenticate(request);
                if (result == null)
                {
                    _logger.LogError("Unauthorized access attempt.");
                    return Unauthorized();
                }
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error during login: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }
    }

    public class LoginRequest
    {
        public required string Username { get; set; }
        public required string Password { get; set; }
    }
}