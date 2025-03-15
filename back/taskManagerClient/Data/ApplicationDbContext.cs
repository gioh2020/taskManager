using Microsoft.EntityFrameworkCore;
using taskManagerClient.Models;

namespace taskManagerClient.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<UserTask> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            modelBuilder.Entity<UserTask>()
                 .HasOne<User>() // Aquí indicamos que UserTask tiene una relación con User
                 .WithMany()     // No definimos la propiedad de navegación en UserTask
                 .HasForeignKey(t => t.UserId) // Se usa UserId como clave foránea
                 .OnDelete(DeleteBehavior.Cascade);
        }
    }
} 