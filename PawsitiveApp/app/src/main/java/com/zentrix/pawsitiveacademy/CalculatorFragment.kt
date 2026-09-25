package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.widget.CheckBox
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.zentrix.pawsitiveacademy.model.CourseCatalog
import com.zentrix.pawsitiveacademy.model.PricingCalculator
import com.zentrix.pawsitiveacademy.model.SelectionState
import kotlin.math.roundToInt

class CalculatorFragment : Fragment(R.layout.fragment_calculator) {

    private lateinit var tvSubtotal: TextView
    private lateinit var tvDiscountLabel: TextView
    private lateinit var tvDiscount: TextView
    private lateinit var tvVat: TextView
    private lateinit var tvTotal: TextView

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        tvSubtotal = view.findViewById(R.id.tvSubtotal)
        tvDiscountLabel = view.findViewById(R.id.tvDiscountLabel)
        tvDiscount = view.findViewById(R.id.tvDiscount)
        tvVat = view.findViewById(R.id.tvVat)
        tvTotal = view.findViewById(R.id.tvTotal)

        val optionsContainer = view.findViewById<LinearLayout>(R.id.optionsContainer)
        optionsContainer.removeAllViews()

        CourseCatalog.all.forEach { course ->
            val row = LayoutInflater.from(requireContext())
                .inflate(R.layout.item_course_option, optionsContainer, false)

            row.findViewById<TextView>(R.id.tvOptionName).text = course.name
            row.findViewById<TextView>(R.id.tvOptionDuration).text = course.duration
            row.findViewById<TextView>(R.id.tvOptionPrice).text = PricingCalculator.money(course.price)

            val checkBox = row.findViewById<CheckBox>(R.id.cbCourse)
            checkBox.isChecked = SelectionState.selectedKeys.contains(course.key)
            checkBox.setOnCheckedChangeListener { _, isChecked ->
                if (isChecked) SelectionState.selectedKeys.add(course.key)
                else SelectionState.selectedKeys.remove(course.key)
                updateSummary()
            }

            optionsContainer.addView(row)
        }

        view.findViewById<View>(R.id.btnRequestQuote).setOnClickListener {
            Toast.makeText(requireContext(), "Quotation request captured.", Toast.LENGTH_SHORT).show()
        }

        updateSummary()
    }

    private fun updateSummary() {
        val selectedCourses = CourseCatalog.all.filter { SelectionState.selectedKeys.contains(it.key) }
        val result = PricingCalculator.calculate(selectedCourses)
        tvSubtotal.text = PricingCalculator.money(result.subtotal)
        tvDiscountLabel.text = "Discount ${(result.rate * 100).roundToInt()}%"
        tvDiscount.text = "− ${PricingCalculator.money(result.discount)}"
        tvVat.text = PricingCalculator.money(result.vat)
        tvTotal.text = PricingCalculator.money(result.total)
    }
}
