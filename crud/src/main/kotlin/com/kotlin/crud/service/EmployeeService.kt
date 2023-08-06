package com.kotlin.crud.service

import com.kotlin.crud.entity.Employee
import java.util.*

interface EmployeeService {
    fun create(employee : Employee)

    fun get(id : Int): Optional<Employee>

    fun getEmail(email : String): Employee?

    fun update(id : Int, employee: Employee)

    fun delete(id : Int)

    fun list() : List<Employee>


}