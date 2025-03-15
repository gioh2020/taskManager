using Microsoft.EntityFrameworkCore;
using taskManagerClient.Data;
using taskManagerClient.Models;

namespace taskManagerClient.Services
{
    public class TaskService : ITaskService
    {
        private readonly ApplicationDbContext _context;

        public TaskService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<UserTask> CreateTaskAsync(UserTask task)
        {
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();
            return task;
        }

        public async Task<IEnumerable<UserTask>> GetUserTasksAsync(int userId)
        {
            return await _context.Tasks
                .Where(t => t.UserId == userId)
                .OrderByDescending(t => t.CreatedAt)
                .ToListAsync();
        }

        public async Task<UserTask?> GetTaskByIdAsync(int taskId, int userId)
        {
            return await _context.Tasks
                .FirstOrDefaultAsync(t => t.Id == taskId && t.UserId == userId);
        }

        public async Task<UserTask> UpdateTaskAsync(UserTask task)
        {
            var existingTask = await _context.Tasks
                .FirstOrDefaultAsync(t => t.Id == task.Id && t.UserId == task.UserId);

            if (existingTask == null)
            {
                throw new Exception("Tarea no encontrada");
            }

            existingTask.Title = task.Title;
            existingTask.Description = task.Description;
            existingTask.ExpirationDate = task.ExpirationDate;
            existingTask.Status = task.Status;

            await _context.SaveChangesAsync();
            return existingTask;
        }

        public async Task<bool> DeleteTaskAsync(int taskId, int userId)
        {
            var task = await _context.Tasks
                .FirstOrDefaultAsync(t => t.Id == taskId && t.UserId == userId);

            if (task == null)
            {
                return false;
            }

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();
            return true;
        }
    }
} 