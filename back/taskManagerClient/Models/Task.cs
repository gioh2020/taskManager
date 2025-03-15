using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace taskManagerClient.Models
{
    public class UserTask
    {

        public int? Id { get; set; } 
  
        public string? Title { get; set; } 

        public string? Description { get; set; } 

        public DateTime? ExpirationDate { get; set; }


        public string? Status { get; set; } 


        public int? UserId { get; set; } = 0;



        public  DateTime? CreatedAt { get; set; } = DateTime.Now;
    }
} 