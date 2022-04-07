package com.jev.jasyptmodule.main

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import javax.servlet.http.HttpServletRequest

@Controller
class MainController {
    @GetMapping(value = ["/main"])
    fun main(request: HttpServletRequest): String {
        return "/main"
    }
}