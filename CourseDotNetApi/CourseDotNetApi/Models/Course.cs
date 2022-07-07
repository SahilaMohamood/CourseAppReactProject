using System.ComponentModel.DataAnnotations;

namespace CourseDotNetApi.Models
{
    public class Course
    {
        [Key]
        public int id { get; set; }
        public string title { get; set; }
        public string slug { get; set; }
        public string category { get; set; }
    }
}
