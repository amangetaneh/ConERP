using System.ComponentModel.DataAnnotations;

namespace ERP.Models
{
    public class UserAccount
    {
        [Key]
        public int UserName { get; set; }

        public string Password { get; set; } = string.Empty;
    }
}
