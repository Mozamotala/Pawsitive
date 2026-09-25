package com.zentrix.pawsitiveacademy

import android.graphics.Typeface
import android.os.Bundle
import android.view.Gravity
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.fragment.app.Fragment

class MissingPageFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val context = requireContext()
        val padding = (24 * resources.displayMetrics.density).toInt()
        val title = arguments?.getString(ARG_TITLE) ?: "This page"

        return LinearLayout(context).apply {
            orientation = LinearLayout.VERTICAL
            gravity = Gravity.CENTER
            setPadding(padding, padding, padding, padding)

            addView(TextView(context).apply {
                text = title
                textSize = 22f
                gravity = Gravity.CENTER
                setTypeface(typeface, Typeface.BOLD)
                setTextColor(ContextCompat.getColor(context, R.color.brown))
            })

            addView(TextView(context).apply {
                text = "This page isn't in this part of the project. " +
                    "It will appear once everyone's parts are merged."
                gravity = Gravity.CENTER
                setPadding(0, padding / 2, 0, 0)
                setTextColor(ContextCompat.getColor(context, R.color.muted))
            })
        }
    }

    companion object {
        private const val ARG_TITLE = "title"

        fun newInstance(title: String) = MissingPageFragment().apply {
            arguments = Bundle().apply { putString(ARG_TITLE, title) }
        }
    }
}
