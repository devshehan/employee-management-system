package com.devshehan.employeemanagementapi.service;

import com.devshehan.employeemanagementapi.model.Employee;
import com.devshehan.employeemanagementapi.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }
    public Employee addNewEmployee(Employee employee){
        employeeRepository.save(employee);
        return employee;
    }

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public void deleteEmployee(Long empID){
        boolean exists = employeeRepository.existsById(empID);
        if (!exists){
            throw new IllegalStateException("not exist" + empID + "in the database");
        }
        employeeRepository.deleteById(empID);
    }

}
