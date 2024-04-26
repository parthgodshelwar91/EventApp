namespace DepartmentEmployeeProj.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Department { get; set; }
        public DateOnly DateOfJoining { get; set; }
        public string photofileName{ get; set; }

    }
}
