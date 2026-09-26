package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment

class PricingPage : Fragment(R.layout.page_pricing) {

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<View>(R.id.btnGoToCalculator).setOnClickListener {
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.CALCULATOR)
        }
    }
}
