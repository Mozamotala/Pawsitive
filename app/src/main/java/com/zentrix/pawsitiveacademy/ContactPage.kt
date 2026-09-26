package com.zentrix.pawsitiveacademy

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.google.android.material.textfield.TextInputEditText

class ContactPage : Fragment(R.layout.page_contact) {

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val nameField = view.findViewById<TextInputEditText>(R.id.etContactName)
        val emailField = view.findViewById<TextInputEditText>(R.id.etContactEmail)
        val messageField = view.findViewById<TextInputEditText>(R.id.etContactMessage)

        // opens the academy address in the phone's maps app
        view.findViewById<View>(R.id.btnDirections).setOnClickListener {
            val mapUri = Uri.parse("geo:0,0?q=" + Uri.encode("12 Florida Road, Morningside, Durban"))
            try {
                startActivity(Intent(Intent.ACTION_VIEW, mapUri))
            } catch (e: Exception) {
                Toast.makeText(requireContext(), "No maps app found.", Toast.LENGTH_SHORT).show()
            }
        }

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
