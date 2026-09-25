package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment

class HomeFragment : Fragment(R.layout.fragment_home) {

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

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
