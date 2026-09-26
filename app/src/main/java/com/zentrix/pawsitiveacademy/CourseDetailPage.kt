package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.View
import android.widget.LinearLayout
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.fragment.app.Fragment
import com.zentrix.pawsitiveacademy.model.CourseCatalog
import com.zentrix.pawsitiveacademy.model.PricingCalculator
import com.zentrix.pawsitiveacademy.model.SelectionState

class CourseDetailPage : Fragment(R.layout.page_course_detail) {

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // show whichever course was tapped on the courses page
        val course = CourseCatalog.find(SelectionState.detailKey)

        view.findViewById<TextView>(R.id.tvDetailType).text =
            if (course.duration == "6 weeks") "SIX-WEEK COURSE" else "SIX-MONTH PROGRAMME"
        view.findViewById<TextView>(R.id.tvDetailName).text = course.name
        view.findViewById<TextView>(R.id.tvDetailDuration).text = "Duration: ${course.duration}"
        view.findViewById<TextView>(R.id.tvDetailPrice).text = PricingCalculator.money(course.price)
        view.findViewById<TextView>(R.id.tvDetailPurpose).text = "Purpose: ${course.purpose}"

        val contentContainer = view.findViewById<LinearLayout>(R.id.contentContainer)
        course.content.forEach { topic ->
            val line = TextView(requireContext())
            line.text = "- $topic"
            line.setTextColor(ContextCompat.getColor(requireContext(), R.color.ink))
            line.setPadding(0, 16, 0, 0)
            contentContainer.addView(line)
        }

        view.findViewById<View>(R.id.btnBackToCourses).setOnClickListener {
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.COURSES)
        }
        view.findViewById<View>(R.id.btnSelectDetailCourse).setOnClickListener {
            SelectionState.selectedKeys.add(course.key)
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.CALCULATOR)
        }
    }
}
