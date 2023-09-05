package com.devshehan.employeemanagementapi.controller;

import com.devshehan.employeemanagementapi.model.Employee;
import com.devshehan.employeemanagementapi.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1")
public class EmployeeController {
    private final EmployeeService employeeService;
    @Autowired
    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @PostMapping(path = "addNewEmp")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.addNewEmployee(employee);
    }
}
