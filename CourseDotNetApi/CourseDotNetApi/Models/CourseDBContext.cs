
using Microsoft.EntityFrameworkCore;

namespace CourseDotNetApi.Models
{
    public class CourseDBContext : DbContext
    {
        public CourseDBContext(DbContextOptions<CourseDBContext> options):base(options)
        {

        }
        public DbSet<Course> Courses { get; set; }
    }
}
