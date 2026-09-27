package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {

    // Defines all the different screens available in the app
    enum class Screen {
        HOME, ABOUT, COURSES, COURSE_DETAIL, PRICING, CALCULATOR, CONTACT
    }

    private lateinit var bottomNav: BottomNavigationView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Setup the top app bar
        setSupportActionBar(findViewById<Toolbar>(R.id.toolbar))

        // Handle clicks on the bottom navigation items
        bottomNav = findViewById(R.id.bottomNav)
        bottomNav.setOnItemSelectedListener { item ->
            when (item.itemId) {
                R.id.nav_home -> { openScreen(Screen.HOME); true }
                R.id.nav_courses -> { openScreen(Screen.COURSES); true }
                R.id.nav_fees -> { openScreen(Screen.CALCULATOR); true }
                R.id.nav_contact -> { openScreen(Screen.CONTACT); true }
                else -> false
            }
        }

        // Only load the home screen if the app is starting for the first time
        if (savedInstanceState == null) {
            openScreen(Screen.HOME)
        }
    }

    // Load the top-right menu items
    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.top_menu, menu)
        return true
    }

    // Handle clicks on items in the top-right menu
    override fun onOptionsItemSelected(item: MenuItem): Boolean = when (item.itemId) {
        R.id.menu_about -> { showScreen(Screen.ABOUT); true }
        R.id.menu_pricing -> { showScreen(Screen.PRICING); true }
        else -> super.onOptionsItemSelected(item)
    }

    // Selects the correct bottom tab and then shows the screen
    fun showScreen(screen: Screen) {
        when (screen) {
            Screen.HOME -> bottomNav.selectedItemId = R.id.nav_home
            Screen.COURSES -> bottomNav.selectedItemId = R.id.nav_courses
            Screen.CALCULATOR -> bottomNav.selectedItemId = R.id.nav_fees
            Screen.CONTACT -> bottomNav.selectedItemId = R.id.nav_contact
            else -> openScreen(screen)
        }
    }

    // Swaps the current fragment with the new one for the chosen screen
    private fun openScreen(screen: Screen) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragmentContainer, createPage(screen))
            .commit()
    }

    // Creates the actual page (Fragment) object for each screen type
    private fun createPage(screen: Screen): Fragment = when (screen) {
        Screen.HOME -> HomePage()
        Screen.ABOUT -> AboutPage()
        Screen.COURSES -> CoursesPage()
        Screen.COURSE_DETAIL -> CourseDetailPage()
        Screen.PRICING -> PricingPage()
        Screen.CALCULATOR -> CalculatorPage()
        Screen.CONTACT -> ContactPage()
    }
}
