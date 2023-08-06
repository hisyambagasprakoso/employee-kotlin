package com.kotlin.crud.controller

import com.kotlin.crud.entity.Employee
import com.kotlin.crud.service.EmployeeService
import org.springframework.web.bind.annotation.*
import java.util.*


@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
@RequestMapping(value = ["/api/"])
class EmployeeController(val employeeService: EmployeeService){

    @GetMapping
    fun helloWorld() = "Hello World!";

    @GetMapping(
        value = ["/employees"],
        produces = ["application/json"]
    )
    fun listEmployees(): List<Employee> {
        val responses = employeeService.list()
        return responses
    }

    @GetMapping(
        value = ["/employee/{id}"],
        produces = ["application/json"]
    )
    fun getEmployee(@PathVariable("id") id: Int): Optional<Employee> {
        val response = employeeService.get(id)
        return response
    }

    @PostMapping(
        value = ["employee"],
        produces = ["application/json"],
        consumes = ["application/json"])
    fun saveEmployee(@RequestBody body: Employee){
        val response = employeeService.create(body)
        return response
    }

    @PutMapping(
        value = ["/employee/{id}"],
        produces = ["application/json"],
        consumes = ["application/json"]
    )
    fun updateEmployee(@PathVariable("id") id: Int, @RequestBody body: Employee){
        val response = employeeService.update(id, body)
        return response
    }

    @DeleteMapping(
        value = ["/employee/{id}"],
        produces = ["application/json"]
    )
    fun deleteEmployee(@PathVariable("id") id: Int){
        val response = employeeService.delete(id)
        return response
    }


}