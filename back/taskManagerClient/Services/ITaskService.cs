using taskManagerClient.Models;

namespace taskManagerClient.Services
{
    public interface ITaskService
    {
        Task<UserTask> CreateTaskAsync(UserTask task);
        Task<IEnumerable<UserTask>> GetUserTasksAsync(int userId);
        Task<UserTask?> GetTaskByIdAsync(int taskId, int userId);
        Task<UserTask> UpdateTaskAsync(UserTask task);
        Task<bool> DeleteTaskAsync(int taskId, int userId);
    }
} 