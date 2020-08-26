using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(24, MinimumLength = 8, ErrorMessage = "Your password must be between 8 and 24 characters in length.")]
        public string Password { get; set; }
    }
}