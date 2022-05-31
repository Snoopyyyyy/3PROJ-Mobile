package com.example.idrive

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.user_login)

        var textSignup = findViewById<TextView>(R.id.textSignup)
        textSignup.setOnClickListener{
            startActivity(Intent(this, SignupActivity::class.java))
        }
    }
}