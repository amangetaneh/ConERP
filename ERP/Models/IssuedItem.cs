using System.ComponentModel.DataAnnotations;

namespace ERP.Models
{
    public class IssuedItem
    {
        [Key]
        public int IssuedNo { get; set; }  

        public DateTime Date { get; set; } = DateTime.Now;

        public string FromSite { get; set; } = string.Empty;

        public string ToSite { get; set; } = string.Empty;

        public string ItemName { get; set; } = string.Empty;

        public string DeliveredBy { get; set; } = string.Empty;

        public string ReceivedBy { get; set; } = string.Empty;
        
        public string ApprovedBy { get; set; } = string.Empty;
    }
}