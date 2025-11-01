import * as React from "react"
import Layout from "../components/Layout"

const EnquiryPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  })

  const [submitted, setSubmitted] = React.useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch("http://localhost:1337/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      })

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", interest: "" })
    } catch (error) {
      // No error display — quiet fail as requested
    }
  }

  return (
    <Layout>
      <div
        style={{
          maxWidth: "600px",
          margin: "4rem auto",
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          textAlign: "center",
        }}
      >
        {!submitted ? (
          <>
            <h1 style={{ marginBottom: "1.5rem" }}>Enquiry Form</h1>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1rem", textAlign: "left" }}>
                <label>
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.3rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem", textAlign: "left" }}>
                <label>
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.3rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem", textAlign: "left" }}>
                <label>
                  Phone Number <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.3rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                <label>
                  Interested In <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Algebra, Calculus, Geometry"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.3rem",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div style={{ marginTop: "6rem" }}>
            <h2 style={{ color: "#28a745", marginBottom: "1rem" }}>
              ✅ Thank you for your enquiry!
            </h2>
            <p>We’ll get back to you shortly.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default EnquiryPage
