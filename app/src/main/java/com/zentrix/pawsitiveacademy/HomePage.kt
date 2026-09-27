package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment

// The landing screen providing quick navigation to main features
class HomePage : Fragment(R.layout.page_home) {

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Setup click listeners to navigate to other sections via the MainActivity
        view.findViewById<View>(R.id.btnExploreCourses).setOnClickListener {
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.COURSES)
        }
        view.findViewById<View>(R.id.btnCalculateFees).setOnClickListener {
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.CALCULATOR)
        }
        view.findViewById<View>(R.id.pathwaySixMonth).setOnClickListener {
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.COURSES)
        }
        view.findViewById<View>(R.id.pathwaySixWeek).setOnClickListener {
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.COURSES)
        }
        view.findViewById<View>(R.id.pathwayFeesCalculator).setOnClickListener {
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.CALCULATOR)
        }
    }
}
