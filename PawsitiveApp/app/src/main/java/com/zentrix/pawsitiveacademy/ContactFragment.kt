package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.google.android.material.textfield.TextInputEditText

class ContactFragment : Fragment(R.layout.fragment_contact) {

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val nameField = view.findViewById<TextInputEditText>(R.id.etContactName)
        val emailField = view.findViewById<TextInputEditText>(R.id.etContactEmail)
        val messageField = view.findViewById<TextInputEditText>(R.id.etContactMessage)

        view.findViewById<View>(R.id.btnSendMessage).setOnClickListener {
            val name = nameField.text?.toString().orEmpty()
            val email = emailField.text?.toString().orEmpty()
            val message = messageField.text?.toString().orEmpty()

            if (name.isBlank() || email.isBlank() || message.isBlank()) {
                Toast.makeText(requireContext(), "Please fill in all fields.", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(requireContext(), "Message captured for follow-up.", Toast.LENGTH_SHORT).show()
                nameField.text = null
                emailField.text = null
                messageField.text = null
            }
        }
    }
}
