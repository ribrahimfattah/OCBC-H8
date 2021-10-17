using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesApi.Models
{
    public class MoviesContext
    {
        public string ConnectionString { get; set; }

        public MoviesContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public List<MoviesData> GetMovies()
        {
            List<MoviesData> list = new List<MoviesData>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();

                MySqlCommand cmd = new MySqlCommand("SELECT * FROM Movie", conn);
                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new MoviesData()
                        {
                            Id = reader.GetInt32("Id"),
                            Name = reader.GetString("Name"),
                            Genre = reader.GetString("Genre"),
                            Duration = reader.GetString("Duration"),
                            ReleaseDate = reader.GetDateTime("ReleaseDate")
                        });
                    }
                }
            }
            return list;
        }

        public List<MoviesData> GetMovie(string id)
        {
            List<MoviesData> list = new List<MoviesData>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM Movie WHERE id =@id", conn);
                cmd.Parameters.AddWithValue("@id", id);

                using (MySqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new MoviesData()
                        {
                            Id = reader.GetInt32("Id"),
                            Name = reader.GetString("Name"),
                            Genre = reader.GetString("Genre"),
                            Duration = reader.GetString("Duration"),
                            ReleaseDate = reader.GetDateTime("ReleaseDate")
                        });
                    }
                }
            }
            return list;
        }
    }
}
