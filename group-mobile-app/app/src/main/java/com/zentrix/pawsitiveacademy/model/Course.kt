package com.zentrix.pawsitiveacademy.model

import java.util.Locale

data class Course(
    val key: String,
    val name: String,
    val duration: String,
    val price: Double,
    val purpose: String,
    val content: List<String>
)

object CourseCatalog {
    val all = listOf(
        Course("obedience", "Canine Obedience Training", "6 months", 1500.0,
            "To teach effective dog obedience and behavioural training techniques.",
            listOf("Basic commands", "Leash training", "Behaviour correction", "Positive reinforcement", "Socialisation techniques")),
        Course("grooming", "Pet Grooming", "6 months", 1500.0,
            "To provide professional grooming skills for domestic pets.",
            listOf("Coat care", "Bathing techniques", "Nail trimming", "Ear and eye cleaning", "Grooming equipment")),
        Course("behaviour", "Animal Behaviour", "6 months", 1500.0,
            "To understand common pet behaviours and improve communication with animals.",
            listOf("Animal psychology", "Reading body language", "Stress management", "Behaviour modification", "Enrichment activities")),
        Course("business", "Pet Business Management", "6 months", 1500.0,
            "To prepare learners to operate a successful pet-related business.",
            listOf("Customer service", "Marketing", "Business planning", "Financial management", "Legal requirements")),
        Course("puppy", "Puppy Care", "6 weeks", 750.0,
            "To provide new puppy owners with essential care knowledge.",
            listOf("Feeding", "Vaccinations", "Toilet training", "Exercise", "Socialisation")),
        Course("firstaid", "Pet First Aid", "6 weeks", 750.0,
            "To provide emergency first aid knowledge for pets.",
            listOf("Minor injuries", "CPR basics", "Poison awareness", "Heatstroke", "Emergency transport")),
        Course("walking", "Basic Dog Walking", "6 weeks", 750.0,
            "To teach safe and professional dog walking practices.",
            listOf("Walking equipment", "Handling multiple dogs", "Safety procedures", "Exercise routines"))
    )

    fun find(key: String?): Course = all.firstOrNull { it.key == key } ?: all.first()
}

object SelectionState {
    val selectedKeys = mutableSetOf<String>()
    var detailKey: String? = null
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
