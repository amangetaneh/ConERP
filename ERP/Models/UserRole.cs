using System.ComponentModel.DataAnnotations;

namespace ERP.Models
{
    public class UserRole
    {
        [Key]
        public int Role { get; set; }

        public int UserRoleId { get; set; }

    }
}
