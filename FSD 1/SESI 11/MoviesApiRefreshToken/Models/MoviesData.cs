using System;

namespace MoviesApiRefreshToken.Models {
    public class MoviesData {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public string Duration { get; set; }
        
        public DateTime ReleaseDate { get; set; }
    }
}