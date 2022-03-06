using System.ComponentModel.DataAnnotations;

namespace ERP.Models
{
    public class Item
    {
        [Key]
        public int ItemId { get; set; }

        public string ItemName { get; set; } = string.Empty;

        public int ItemCategory { get; set; }

        public List<Transfer> Transfers { get; set; }
    }
}
