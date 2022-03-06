using System.ComponentModel.DataAnnotations;

namespace ERP.Models
{
    public class UserAccount
    {
        [Key]
        public string UserName { get; set; }

        public string Password { get; set; } = string.Empty;

        public Employee Employee { get; set; }

        public int EmployeeId { get; set; }

        public UserRole UserRole { get; set; }

        public int UserRoleId { get; set; }
    }
}
