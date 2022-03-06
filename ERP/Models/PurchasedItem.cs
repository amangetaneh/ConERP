using System.ComponentModel.DataAnnotations;

namespace ERP.Models
{
    public class PurchasedItem
    {
        [Key]
        public int PurchaseRequestNo { get; set; }

        public DateTime Date { get; set; } = DateTime.Now;

        public string RequestSite { get; set; } = string.Empty;

        public string ItemName { get; set; } = string.Empty;
        
        public string RequestedBy { get; set; } = string.Empty;
        
        public string CheckedBy { get; set; } = string.Empty;
        
        public string ApprovedBy { get; set; } = string.Empty;
    }
}
