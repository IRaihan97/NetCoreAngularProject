using System.ComponentModel.DataAnnotations;

namespace UdemyApp.api.Dtos
{
    public class UserForRegisterDTO
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "Password has to be between 4 to 8 characters")]
        public string Password { get; set; }
    }
}