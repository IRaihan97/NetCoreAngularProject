using Microsoft.EntityFrameworkCore;
using UdemyApp.api.Models;

namespace UdemyApp.api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Value { get; set; }

        public DbSet<User> Users {get; set;}
    }
}