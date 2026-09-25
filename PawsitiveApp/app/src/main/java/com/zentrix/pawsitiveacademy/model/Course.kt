package com.zentrix.pawsitiveacademy.model

import java.util.Locale

data class Course(
    val key: String,
    val name: String,
    val duration: String,
    val price: Double
)

object CourseCatalog {
    val all = listOf(
        Course("obedience", "Canine Obedience Training", "6 months", 1500.0),
        Course("puppy", "Puppy Care Module", "6 weeks", 750.0),
        Course("grooming", "Pet Grooming Diploma", "6 months", 1500.0)
    )
}

object SelectionState {
    val selectedKeys = mutableSetOf<String>()
}

data class QuoteResult(
    val subtotal: Double,
    val rate: Double,
    val discount: Double,
    val vat: Double,
    val total: Double
)

object PricingCalculator {

    fun discountRate(count: Int): Double = when {
        count >= 4 -> 0.15
        count == 3 -> 0.10
        count == 2 -> 0.05
        else -> 0.0
    }

    fun calculate(selected: List<Course>): QuoteResult {
        val subtotal = selected.sumOf { it.price }
        val rate = discountRate(selected.size)
        val discount = subtotal * rate
        val afterDiscount = subtotal - discount
        val vat = afterDiscount * 0.15
        return QuoteResult(subtotal, rate, discount, vat, afterDiscount + vat)
    }

    fun money(amount: Double): String =
        "R" + String.format(Locale.US, "%,.2f", amount)
}
