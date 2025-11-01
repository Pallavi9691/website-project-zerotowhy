import * as React from "react"
import Layout from "../components/Layout"

const MathCourse = () => {
  const [course, setCourse] = React.useState(null)

  React.useEffect(() => {
    fetch("http://localhost:1337/api/courses?populate[modules]=*&filters[slug][$eq]=mathematics-essentials")
      .then((res) => res.json())
      .then((data) => setCourse(data.data[0]))
      .catch((err) => console.error("Error fetching course:", err))
  }, [])

  if (!course) return <p>Loading course...</p>

  const { title, description, image, modules } = course
  const desc = description?.[0]?.children?.[0]?.text || ""

  return (
    <Layout>
      <div style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#1e3a8a" }}>{title}</h1>

        {image?.[0]?.url && (
          <img
            src={`http://localhost:1337${image[0].url}`}
            alt={title}
            style={{
              width: "100%",
              borderRadius: "12px",
              margin: "1.5rem 0",
              objectFit: "cover",
            }}
          />
        )}

        <p style={{ color: "#334155", lineHeight: "1.8" }}>{desc}</p>

        <h2 style={{ marginTop: "2rem", color: "#1e293b" }}>📘 Curriculum</h2>
        {modules.length === 0 ? (
          <p>No modules available.</p>
        ) : (
          <ul style={{ marginTop: "1rem" }}>
            {modules.map((m) => (
              <li key={m.id} style={{ marginBottom: "1rem" }}>
                <details>
                  <summary
                    style={{
                      cursor: "pointer",
                      fontWeight: "600",
                      color: "#1e3a8a",
                    }}
                  >
                    {m.module_name}
                  </summary>
                  <p style={{ marginTop: "0.5rem", color: "#475569" }}>
                    {m.shortDescription?.[0]?.children?.[0]?.text}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  )
}

export default MathCourse
