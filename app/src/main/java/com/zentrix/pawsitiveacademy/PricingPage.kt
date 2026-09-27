package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment

// Shows general information about pricing structures and discounts
class PricingPage : Fragment(R.layout.page_pricing) {

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Shortcut to take the user directly to the interactive fee calculator
        view.findViewById<View>(R.id.btnGoToCalculator).setOnClickListener {
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.CALCULATOR)
        }
    }
}
