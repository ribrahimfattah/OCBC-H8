using System.ComponentModel.DataAnnotations;
using MoviesApi.Controllers;

namespace MoviesApi.Models.DTOs.Requests {
    public class UserLoginRequest {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}