package com.example.idrive

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class SignupActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.user_signup)

        var textLogin = findViewById<TextView>(R.id.textLogin)
        textLogin.setOnClickListener{
            startActivity(Intent(this, LoginActivity::class.java))
        }
    }
}