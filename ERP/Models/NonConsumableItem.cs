using Microsoft.EntityFrameworkCore;

namespace ERP.Models
{
    [Keyless]
    public class NonConsumableItem
    {
        public Item Item { get; set; }

        public string Model { get; set; } = string.Empty;

        public string SerialNo { get; set; } = string.Empty;

        public string AssetNo { get; set; } = string.Empty;

        public string ItemUnit { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;
    }
}
