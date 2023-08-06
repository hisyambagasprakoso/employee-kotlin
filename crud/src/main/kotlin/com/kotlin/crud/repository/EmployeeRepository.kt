package com.kotlin.crud.repository

import com.kotlin.crud.entity.Employee
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository


@Repository
interface EmployeeRepository : JpaRepository<Employee, Int>{

    fun findByEmail(email : String): Employee?
}