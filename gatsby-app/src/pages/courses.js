import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const PRIMARY_COLOR = "#1e3a8a"

const CoursesPage = () => {
  const [courses, setCourses] = React.useState([])

  React.useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/courses?populate=*")
        const json = await res.json()
        setCourses(json.data)
      } catch (err) {
        console.error("Error fetching courses:", err)
      }
    }
    fetchCourses()
  }, [])

  return (
    <Layout>
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#1e293b" }}>
          📚 Foundational Courses
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem",
          }}
        >
          {courses.length === 0 ? (
            <p>Loading courses...</p>
          ) : (
            courses.map((course) => {
              const imageUrl = course.image?.[0]?.url
                ? `http://localhost:1337${course.image[0].url}`
                : null
              const desc = course.description?.[0]?.children?.[0]?.text || ""

              return (
                <div
                  key={course.id}
                  style={{
                    backgroundColor: "#f9fafb",
                    borderRadius: "16px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    textAlign: "left",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={course.title}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "300px",
                        background: "#e5e7eb",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#555",
                      }}
                    >
                      No image available
                    </div>
                  )}

                  <div style={{ padding: "1.5rem" }}>
                    <h2 style={{ color: "#0f172a", marginBottom: "0.5rem" }}>
                      {course.title}
                    </h2>
                    <p style={{ color: "#475569", lineHeight: "1.6" }}>{desc}</p>

                    <div style={{ marginTop: "1rem" }}>
                      <Link
                        to={`/course/${course.slug || course.id}`}
                        style={{
                          display: "inline-block",
                          background: PRIMARY_COLOR,
                          color: "white",
                          padding: "0.6rem 1rem",
                          borderRadius: "8px",
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                      >
                        Explore more
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </Layout>
  )
}

export default CoursesPage
