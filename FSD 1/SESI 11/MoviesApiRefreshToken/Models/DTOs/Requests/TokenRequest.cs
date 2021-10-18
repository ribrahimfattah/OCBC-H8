using System.ComponentModel.DataAnnotations;

namespace MoviesApiRefreshToken.Models.DTOs.Requests
{   
    public class TokenRequest
    {
        [Required]
        public string Token { get; set; }

        [Required]
        public string RefreshToken { get; set; }
    }
}