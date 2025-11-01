import * as React from "react"
import { Link } from "gatsby"

const Header = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = React.useState("")

  const handleSelectChange = (e) => {
    setSelectedCourse(e.target.value)
    if (e.target.value) {
      // Navigate to course page or scroll to course section
      // For simplicity, let's navigate to `/courses#slug`
      window.location.href = `/courses#${e.target.value}`
    }
  }

  return (
    <header style={{ display: "flex", alignItems: "center", padding: "1rem 2rem", background: "#1e293b", color: "#fff" }}>
      <div style={{ flexGrow: 1 }}>
        <Link to="/" style={{ color: "#fff", fontWeight: "bold", fontSize: "1.5rem", textDecoration: "none" }}>
          Logo
        </Link>
      </div>

      {/* Dropdown */}
      <select
        value={selectedCourse}
        onChange={handleSelectChange}
        style={{ padding: "0.4rem 0.8rem", borderRadius: "6px", border: "none", fontSize: "1rem" }}
      >
        <option value="">Select a course</option>
        {courses.map((course, index) => (
          <option key={index} value={course.slug}>
            {course.title}
          </option>
        ))}
      </select>
    </header>
  )
}

export default Header
