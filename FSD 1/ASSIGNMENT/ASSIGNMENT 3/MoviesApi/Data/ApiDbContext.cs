using System;
using MySqlConnector;
using Microsoft.EntityFrameworkCore;
using MoviesApi.Models;
using MySql.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.SqlServer;
//using Microsoft.EntityFrameworkCore.Tools;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;

namespace MoviesApi.Data
{
    public class ApiDbContext : IdentityDbContext {
        public virtual DbSet<MoviesData> Movie { get; set; }

        public ApiDbContext(DbContextOptions<ApiDbContext> options)
            : base(options) {
                
            }
            
        // public string ConnectionString { get; set; }
        // public ApiDbContext(string connectionString)
        // {
        //     this.ConnectionString = connectionString;
        // }

        // private MySqlConnection GetConnection()
        // {
        //     return new MySqlConnection(ConnectionString);
        // }
    }  
}