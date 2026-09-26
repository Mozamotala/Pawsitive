package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.widget.LinearLayout
import android.widget.TextView
import androidx.fragment.app.Fragment
import com.zentrix.pawsitiveacademy.model.CourseCatalog
import com.zentrix.pawsitiveacademy.model.PricingCalculator
import com.zentrix.pawsitiveacademy.model.SelectionState

class CoursesFragment : Fragment(R.layout.fragment_courses) {

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val sixMonthContainer = view.findViewById<LinearLayout>(R.id.sixMonthContainer)
        val sixWeekContainer = view.findViewById<LinearLayout>(R.id.sixWeekContainer)
        sixMonthContainer.removeAllViews()
        sixWeekContainer.removeAllViews()

        CourseCatalog.all.forEach { course ->
            val container = if (course.duration == "6 weeks") sixWeekContainer else sixMonthContainer
            val item = LayoutInflater.from(requireContext())
                .inflate(R.layout.item_course, container, false)

            item.findViewById<TextView>(R.id.tvCourseName).text = course.name
            item.findViewById<TextView>(R.id.tvCourseDuration).text = course.duration
            item.findViewById<TextView>(R.id.tvCoursePrice).text = PricingCalculator.money(course.price)

            val selectButton = item.findViewById<android.widget.Button>(R.id.btnSelectCourse)
            if (course.key == "obedience") {
                selectButton.text = "View details"
                selectButton.setOnClickListener {
                    (activity as? MainActivity)?.showScreen(MainActivity.Screen.COURSE_DETAIL)
                }
            } else {
                selectButton.text = "Select this course"
                selectButton.setOnClickListener {
                    SelectionState.selectedKeys.add(course.key)
                    (activity as? MainActivity)?.showScreen(MainActivity.Screen.CALCULATOR)
                }
            }

            container.addView(item)
        }
    }
}
