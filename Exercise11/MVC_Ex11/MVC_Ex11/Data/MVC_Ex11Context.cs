using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MVC_Ex11.Models;

namespace MVC_Ex11.Data
{
    public class MVC_Ex11Context : DbContext
    {
        public MVC_Ex11Context (DbContextOptions<MVC_Ex11Context> options)
            : base(options)
        {
        }

        public DbSet<MVC_Ex11.Models.Product> Product { get; set; } = default!;
    }
}
