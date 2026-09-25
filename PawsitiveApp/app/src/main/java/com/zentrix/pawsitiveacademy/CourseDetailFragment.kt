package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment
import com.zentrix.pawsitiveacademy.model.SelectionState

class CourseDetailFragment : Fragment(R.layout.fragment_course_detail) {

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<View>(R.id.btnBackToCourses).setOnClickListener {
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.COURSES)
        }
        view.findViewById<View>(R.id.btnSelectDetailCourse).setOnClickListener {
            SelectionState.selectedKeys.add("obedience")
            (activity as? MainActivity)?.showScreen(MainActivity.Screen.CALCULATOR)
        }
    }
}
