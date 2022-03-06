using System.ComponentModel.DataAnnotations;

namespace ERP.Models
{
    public class ReceivedItem
    {
        [Key]
        public int ReceiveNo { get; set; }

        public DateTime Date { get; set; } = DateTime.Now;

        public string ReceiveSite { get; set; } = string.Empty;

        public string DeliveredFrom { get; set; } = string.Empty;

        public string PurchaseRequestNo { get; set; } = string.Empty;

        public string ItemName { get; set; } = string.Empty;
        
        public string DeliveredBy { get; set; } = string.Empty;

        public string ReceivedBy { get; set; } = string.Empty;

        public string ApprovedBy { get; set; } = string.Empty;
    }
}
