using Microsoft.EntityFrameworkCore;

namespace ERP.Models
{
    [Keyless]
    public class ConsumableItem
    {
        public Item Item { get; set; }

        public string ItemSpecification { get; set; } = string.Empty;

        public string ItemUnit { get; set; } = string.Empty;
    }
}
