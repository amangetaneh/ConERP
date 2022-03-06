using ERP.Models;
using Microsoft.EntityFrameworkCore;

namespace ERP.Context
{
    public class DataContext
        : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
            
        }

        public DbSet<ConsumableItem> ConsumableItems { get; set; }

        public DbSet<NonConsumableItem> NonConsumableItems { get; set; }

        public DbSet<IssuedItem> IssuedItems { get; set; }

        public DbSet<PurchasedItem> PurchasedItems { get; set; }

        public DbSet<ReceivedItem> ReceivedItems { get; set; }

        public DbSet<Transfer> Transfers { get; set; }
        
        public DbSet<MaintenanceRequest> MaintenanceRequests { get; set; }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<UserAccount> UserAccounts { get; set; }

        public DbSet<UserRole> UserRoles { get; set; }

        public DbSet<Item> Items { get; set; }

        public DbSet<Site> Sites { get; set; }

        public DbSet<Store> Stores { get; set; }
    }
}
