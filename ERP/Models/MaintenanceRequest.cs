using System.ComponentModel.DataAnnotations;

namespace ERP.Models
{
    public class MaintenanceRequest
    {
        [Key]
        public int MaintenanceRequestNo { get; set; }

        public DateTime Date { get; set; } = DateTime.Now;

        public string FromSite { get; set; } = string.Empty;

        public string ItemName { get; set; } = string.Empty;

        public string ReasonOfDamage { get; set; } = string.Empty;

        public string RequestedBy { get; set; } = string.Empty;

        public string ApprovedBy { get; set; } = string.Empty;
    }
}
