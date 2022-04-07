package com.jev.jasyptmodule.main

import org.jasypt.encryption.pbe.PooledPBEStringEncryptor
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class ApiModuleController {
    @PostMapping(value = ["/module/enc"])
    fun enc(@RequestParam(value = "key") key: String, @RequestParam(value = "str") str: String) : String {
        val pooledPBEStringEncryptor = PooledPBEStringEncryptor()
        pooledPBEStringEncryptor.setPassword(key)
        pooledPBEStringEncryptor.setAlgorithm("PBEWithMD5AndDES")
        pooledPBEStringEncryptor.setPoolSize(1)
        return pooledPBEStringEncryptor.encrypt(str)
    }

    @PostMapping(value = ["/module/dec"])
    fun dec(@RequestParam(value = "key") key: String, @RequestParam(value = "str") str: String) : String {
        val pooledPBEStringEncryptor = PooledPBEStringEncryptor()
        pooledPBEStringEncryptor.setPassword(key)
        pooledPBEStringEncryptor.setAlgorithm("PBEWithMD5AndDES")
        pooledPBEStringEncryptor.setPoolSize(1)
        return pooledPBEStringEncryptor.decrypt(str)
    }
}