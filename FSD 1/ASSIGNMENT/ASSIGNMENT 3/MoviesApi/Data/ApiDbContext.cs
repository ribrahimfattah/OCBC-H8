using System;
using MySqlConnector;
using Microsoft.EntityFrameworkCore;
using MoviesApi.Models;
using MySql.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;

namespace MoviesApi.Data
{
    public class ApiDbContext : IdentityDbContext {
        public virtual DbSet<MoviesData> Movie { get; set; }

        public ApiDbContext(DbContextOptions<ApiDbContext> options)
            : base(options) {
                
            }
            
    }  
}