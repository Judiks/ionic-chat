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
            modelBuilder.Entity<PhoneNumber>()
                .HasIndex(u => u.Number)
                .IsUnique();
        }

        public DbSet<Address> Addresses { get; set; }
        public DbSet<City> Cities { get; set; }

        public DbSet<Contact> Contacts { get; set; }
        public DbSet<ContactData> ContactDatas { get; set; }
        public DbSet<ContactDataAddress> ContactDataAddresses { get; set; }
        public DbSet<ContactDataImage> ContactDataImages { get; set; }
        public DbSet<ContactDataOrganization> ContactDataOrganizations { get; set; }
        public DbSet<ContactDataPhoneNumber> ContactDataPhoneNumbers { get; set; }
        public DbSet<ContactDataUrl> ContactDataUrls { get; set; }

        public DbSet<Country> Countries { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        public DbSet<PhoneNumber> PhoneNumbers { get; set; }

        public DbSet<Room> Rooms { get; set; }
        public DbSet<RoomImage> RoomImages { get; set; }

        public DbSet<Url> Urls { get; set; }

        public DbSet<UserAddresse> UserAddresses { get; set; }
        public DbSet<UserImage> UserImages { get; set; }
        public DbSet<UserOrganization> UserOrganizations { get; set; }
        public DbSet<UserPhoneNumber> UserPhoneNumbers { get; set; }
        public DbSet<UserRoom> UserRooms { get; set; }
        public DbSet<UserUrl> UserUrls { get; set; }
    }
}
