using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using taskManagerClient.Models;
using taskManagerClient.Services;

namespace taskManagerClient.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            if (user == null)
                return NotFound();

            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            try
            {
                var result = await _userService.CreateUserAsync(user);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<User>> Login([FromBody] LoginRequest request)
        {
            try
            {
                var user = await _userService.GetUserByUsernameAsync(request.Username);
                
                if (user == null)
                {
                    return Unauthorized("Usuario no encontrado");
                }

                if (user.Password != request.Password)
                {
                    return Unauthorized("Contraseña incorrecta");
                }

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }

    public class LoginRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
} 