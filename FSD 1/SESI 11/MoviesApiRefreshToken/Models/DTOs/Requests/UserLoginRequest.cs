using System.ComponentModel.DataAnnotations;
using MoviesApiRefreshToken.Controllers;

namespace MoviesApiRefreshToken.Models.DTOs.Requests {
    public class UserLoginRequest {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}