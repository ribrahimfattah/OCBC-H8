using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UnitTest_Mock.Models;
using UnitTest_Mock.Services;

namespace UnitTest_Mock.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        #region Property
        private readonly IEmployeeService _employeeService;
        #endregion

        #region Constructor
        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        #endregion

        [HttpGet(nameof(GetEmployeebyId))]
        public async Task<string> GetEmployeebyId(int EmpID)
        {
            var result = await _employeeService.GetEmployeebyId(EmpID);
            return result;
        }

        [HttpGet(nameof(GetEmployeeDetails))]
        public async Task<Employee> GetEmployeeDetails(int EmpID)
        {
            var result = await _employeeService.GetEmployeeDetails(EmpID);
            return result;
        }
    }
}