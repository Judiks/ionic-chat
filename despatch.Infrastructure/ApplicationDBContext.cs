using despatch.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace despatch.Infrastructure
{
    public class ApplicationDBContext : IdentityDbContext<User>
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> context) : base(context)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Address> Addresses { get; set; }
        public DbSet<City> Cities { get; set; }

        public DbSet<ContactData> ContactDatas { get; set; }
        public DbSet<ContactDataAddresses> ContactDataAddresses { get; set; }
        public DbSet<ContactDataImages> ContactDataImages { get; set; }
        public DbSet<ContactDataOrganizations> ContactDataOrganizations { get; set; }
        public DbSet<ContactDataPhoneNumbers> ContactDataPhoneNumbers { get; set; }
        public DbSet<ContactDataUrls> ContactDataUrls { get; set; }

        public DbSet<Country> Countries { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<PhoneNumber> PhoneNumbers { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Url> Urls { get; set; }
        public DbSet<UserAddresses> UserAddresses { get; set; }
        public DbSet<UserImages> UserImages { get; set; }
        public DbSet<UserOrganizations> UserOrganizations { get; set; }
        public DbSet<UserPhoneNumbers> UserPhoneNumbers { get; set; }
        public DbSet<UserRooms> UserRooms { get; set; }
        public DbSet<UserUrls> UserUrls { get; set; }
    }
}
