using Microsoft.AspNetCore.Mvc;
using taskManagerClient.Models;
using taskManagerClient.Services;

namespace taskManagerClient.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpPost]
        public async Task<ActionResult<UserTask>> CreateTask(UserTask task)
        {
            try
            {
                var result = await _taskService.CreateTaskAsync(task);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<UserTask>>> GetUserTasks(int userId)
        {
            try
            {
                var tasks = await _taskService.GetUserTasksAsync(userId);
                return Ok(tasks);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{taskId}/user/{userId}")]
        public async Task<ActionResult<UserTask>> GetTask(int taskId, int userId)
        {
            try
            {
                var task = await _taskService.GetTaskByIdAsync(taskId, userId);
                if (task == null)
                {
                    return NotFound("Tarea no encontrada");
                }
                return Ok(task);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult<UserTask>> UpdateTask(UserTask task)
        {
            try
            {
                var result = await _taskService.UpdateTaskAsync(task);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{taskId}/user/{userId}")]
        public async Task<ActionResult> DeleteTask(int taskId, int userId)
        {
            try
            {
                var result = await _taskService.DeleteTaskAsync(taskId, userId);
                if (!result)
                {
                    return NotFound("Tarea no encontrada");
                }
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
} 