package com.kotlin.crud.controller

import com.kotlin.crud.entity.Employee
import com.kotlin.crud.entity.Message
import com.kotlin.crud.service.EmployeeService
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletResponse

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
@RequestMapping(value = ["/api/"])
class LoginController(val employeeService: EmployeeService) {
    @PostMapping(
        value = ["/login"] ,
        produces = ["application/json"],
        consumes = ["application/json"]
    )
    fun loginEmployee(@RequestBody body: Employee, response: HttpServletResponse): ResponseEntity<Any> {
        val user = this.employeeService.getEmail(body.email)
            ?: return ResponseEntity.badRequest().body(Message("user not found!"))

        if (!user.comparePassword(body.password)) {
            return ResponseEntity.badRequest().body(Message("invalid password!"))
        }

        val issuer = user.id.toString()

        val jwt = Jwts.builder()
            .setIssuer(issuer)
            .setExpiration(Date(System.currentTimeMillis() + 60 * 24 * 1000)) // 1 day
            .signWith(SignatureAlgorithm.HS512, "secret").compact()

        val cookie = Cookie("jwt", jwt)
        cookie.isHttpOnly = true

        response.addCookie(cookie)

        return ResponseEntity.ok(Message("success"))
    }

    @PostMapping("logout")
    fun logout(response: HttpServletResponse): ResponseEntity<Any> {
        val cookie = Cookie("jwt", "")
        cookie.maxAge = 0

        response.addCookie(cookie)

        return ResponseEntity.ok(Message("success"))
    }
}