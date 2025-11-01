import * as React from "react"

const CoursePricingSection = ({ courseName }) => {
  return (
    <section
      style={{
        backgroundColor: "#f9fafb",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: "2rem",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#111" }}>
          {courseName} Course & Pricing
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2rem" }}>
          Learn industry-relevant Java skills with hands-on projects and expert mentorship.
        </p>

        {/* Pricing Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* Self-Paced */}
          <div style={{ ...cardStyle, border: "2px solid #007bff" }}>
          
            <h3 style={planTitle}>Self-Paced</h3>
            <p style={priceText}>₹ 9,999</p>
            <ul style={featureList}>
              <li>Lifetime access</li>
              <li>Pre-recorded video lectures</li>
              <li>Assignments & quizzes</li>
              <li>Completion certificate</li>
            </ul>
            <button style={enrollButton}>Enroll Now</button>
          </div>

          {/* Live Mentorship */}
          <div style={{ ...cardStyle, border: "2px solid #007bff" }}>
            <h3 style={planTitle}>Live + Mentorship</h3>
            <p style={priceText}>₹ 19,999</p>
            <ul style={featureList}>
              <li>Live classes with experts</li>
              <li>1:1 mentorship sessions</li>
              <li>Real-world projects</li>
              <li>Job assistance</li>
              <li>Certificate of Excellence</li>
            </ul>
            <button style={enrollButton}>Enroll Now</button>
          </div>
        </div>

        {/* EMI Info */}
        <p style={{ marginTop: "2rem", fontSize: "1rem", color: "#444" }}>
          💳 EMI options available. Contact our team for more details.
        </p>
      </div>
    </section>
  )
}

// Styles
const cardStyle = {
  flex: "1 1 300px",
  background: "#fff",
  borderRadius: "10px",
  padding: "2rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  textAlign: "center",
  maxWidth: "350px",
}

const planTitle = { fontSize: "1.5rem", marginBottom: "0.5rem", color: "#111" }
const priceText = { fontSize: "1.75rem", fontWeight: "bold", color: "#007bff", margin: "1rem 0" }
const featureList = {
  listStyle: "none",
  padding: 0,
  margin: "1rem 0 2rem",
  color: "#555",
  textAlign: "left",
}
const enrollButton = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: "0.75rem 1.5rem",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
}

export default CoursePricingSection
