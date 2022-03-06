using System.ComponentModel.DataAnnotations;

namespace ERP.Models
{
    public class Transfer
    {
        [Key]
        public int Id { get; set; }

        public DateTime Date { get; set; } = DateTime.Now;

        public Store SendStore { get; set; }

        public Store ReceiveStore { get; set; }

        public List<Item> Items { get; set; }

        public Employee RequestedBy { get; set; }

        public Employee ReceivedBy { get; set; }

        public Employee DeliveredBy { get; set; }

        public string VehiclePlateNo { get; set; } = string.Empty;

        public Employee ApprovedBy { get; set; }

        public String Remark { get; set; } = String.Empty;

    }
}
