using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CircleTest1.DataModels
{
    public class Context:DbContext
    {
        public DbSet<Circle> Circles { get; set; }
        public DbSet<Comment> Comments { get; set; }

        public Context(DbContextOptions<Context> options): base(options)
        {
        }
    }
}
