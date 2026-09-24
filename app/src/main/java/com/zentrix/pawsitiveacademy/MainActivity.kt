package com.zentrix.pawsitiveacademy

import android.os.Bundle
import android.view.Menu
import android.view.MenuItem
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.fragment.app.Fragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {

    enum class Screen(val className: String, val title: String) {
        HOME("HomeFragment", "Home"),
        ABOUT("AboutFragment", "About Us"),
        COURSES("CoursesFragment", "Courses"),
        COURSE_DETAIL("CourseDetailFragment", "Course Details"),
        PRICING("PricingFragment", "Pricing"),
        CALCULATOR("CalculatorFragment", "Fees Calculator"),
        CONTACT("ContactFragment", "Contact Us")
    }

    private lateinit var bottomNav: BottomNavigationView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        setSupportActionBar(findViewById<Toolbar>(R.id.toolbar))

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

        if (savedInstanceState == null) {
            openScreen(Screen.HOME)
        }
    }

    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        menuInflater.inflate(R.menu.top_menu, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean = when (item.itemId) {
        R.id.menu_about -> { showScreen(Screen.ABOUT); true }
        R.id.menu_pricing -> { showScreen(Screen.PRICING); true }
        else -> super.onOptionsItemSelected(item)
    }

    fun showScreen(screen: Screen) {
        when (screen) {
            Screen.HOME -> bottomNav.selectedItemId = R.id.nav_home
            Screen.COURSES -> bottomNav.selectedItemId = R.id.nav_courses
            Screen.CALCULATOR -> bottomNav.selectedItemId = R.id.nav_fees
            Screen.CONTACT -> bottomNav.selectedItemId = R.id.nav_contact
            else -> openScreen(screen)
        }
    }

    private fun openScreen(screen: Screen) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.fragmentContainer, createFragment(screen))
            .commit()
    }

    private fun createFragment(screen: Screen): Fragment = try {
        Class.forName("${MainActivity::class.java.`package`!!.name}.${screen.className}")
            .getDeclaredConstructor()
            .newInstance() as Fragment
    } catch (e: ClassNotFoundException) {
        MissingPageFragment.newInstance(screen.title)
    }
}
