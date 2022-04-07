package com.jev.jasyptmodule.config

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication(scanBasePackages = ["com.jev.jasyptmodule"], exclude= [DataSourceAutoConfiguration::class])
class JasyptModuleApplication

fun main(args: Array<String>) {
    runApplication<JasyptModuleApplication>(*args)
}
