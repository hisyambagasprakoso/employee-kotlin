package com.kotlin.crud.entity
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder


@Entity
@Table(name = "employee")
data class Employee(
    @Id
    val id: Int,

    @Column(name = "name")
    var name: String = "",

    @Column(name = "nik")
    var nik: Long,

    @Column(name = "address")
    var address: String = "",

    @Column(name = "telp")
    var telp: String = "",

    @Column(name = "email")
    var email: String = "",

    @Column(name = "password")
    var password: String = ""
) {
    fun comparePassword(password: String): Boolean {
        return BCryptPasswordEncoder().matches(password, this.password)
    }
}

