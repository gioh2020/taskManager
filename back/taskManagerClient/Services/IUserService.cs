using System.Threading.Tasks;
using taskManagerClient.Models;

namespace taskManagerClient.Services
{
    public interface IUserService
    {
        Task<User> GetUserByIdAsync(int id);
        Task<User> CreateUserAsync(User user);
        Task<User?> GetUserByUsernameAsync(string username);
    }
} 