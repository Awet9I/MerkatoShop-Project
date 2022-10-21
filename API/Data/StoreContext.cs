using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    /*
    * A class that inherits from DbContext interface inorder to be able to access our database
    * https://learn.microsoft.com/en-us/ef/core/dbcontext-configuration/
    */
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {

        }

        //sets up the table for the entity product
        public DbSet<Product> Products { get; set; }
    }
}