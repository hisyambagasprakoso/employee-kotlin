package com.kotlin.crud.serviceImpl

//import com.kotlin.crud.config.BCryptPasswordEncoder
import com.kotlin.crud.entity.Employee
import com.kotlin.crud.error.NotFoundException
import com.kotlin.crud.repository.EmployeeRepository
import com.kotlin.crud.service.EmployeeService
import org.springframework.data.repository.findByIdOrNull
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.stereotype.Service
import java.util.*

@Service
class EmployeeServiceImpl(val employeeRepository: EmployeeRepository): EmployeeService{
//    var pass: BCryptPasswordEncoder
    override fun create(employee: Employee) {
        val pass : BCryptPasswordEncoder = BCryptPasswordEncoder();
        val employee = Employee(
            id = employee.id!!,
            name = employee.name!!,
            nik = employee.nik!!,
            address = employee.address!!,
            telp = employee.telp!!,
            email = employee.email!!,
            password = pass.encode(employee.password!!)
//            password.BCryptPasswordEncoder()
        )
//        employee.password
        employeeRepository.save(employee)
    }

    override fun get(id: Int): Optional<Employee> {
        val employee = employeeRepository.findById(id)
        return employee
    }

    override fun getEmail(email: String): Employee? {
        val employee =  this.employeeRepository.findByEmail(email)
        return employee
    }

    override fun update(id: Int, employee: Employee) {
        val pass : BCryptPasswordEncoder = BCryptPasswordEncoder();
        val employee1 = findProductByIdOrThrowNotFound(id)
        employee1.apply {
            name = employee.name!!
            nik = employee.nik!!
            address = employee.address!!
            telp = employee.telp!!
            email = employee.email!!
            password = pass.encode(employee.password!!)
        }
        employeeRepository.save(employee1)
    }

    override fun delete(id: Int) {
        val employee = findProductByIdOrThrowNotFound(id)
        employeeRepository.delete(employee)
    }

    override fun list() : List<Employee> {
        val employees : List<Employee> = employeeRepository.findAll()
        return employees
    }

    private fun findProductByIdOrThrowNotFound(id: Int): Employee {
        val employee = employeeRepository.findByIdOrNull(id)
        if (employee == null) {
            throw NotFoundException()
        } else {
            return employee;
        }
    }


}