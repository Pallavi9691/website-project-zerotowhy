import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query GetCourseBySlug($slug: String!) {
    strapiCourse(slug: { eq: $slug }) {
      title
      description {
        children {
          text
        }
      }
      videoUrl
      modules {
        id
        module_name
        shortDescription {
          children {
            text
          }
        }
        sections {
          id
          section_name
          longDescription {
            children {
              text
            }
          }
        }
      }
    }
  }
`

const CourseTemplate = ({ data }) => {
  const course = data?.strapiCourse
  const [openModule, setOpenModule] = useState(null)

  if (!course) {
    return (
      <Layout>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Course not found</h2>
          <p>Please check your Strapi content or slug configuration.</p>
        </div>
      </Layout>
    )
  }

  const videoUrl = course.videoUrl
    ? course.videoUrl.replace("watch?v=", "embed/")
    : null

  return (
    <Layout>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
        {/* ===== Course Title ===== */}
        <h1
          style={{
            fontSize: "2.4rem",
            fontWeight: "700",
            color: "#1e3a8a",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          {course.title}
        </h1>

        {/* ===== Video Section ===== */}
        {videoUrl && (
          <div style={{ margin: "2rem 0", textAlign: "center" }}>
            <iframe
              width="100%"
              height="400"
              src={videoUrl}
              title={course.title}
              style={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
              allowFullScreen
            />
          </div>
        )}

        {/* ===== Course Description ===== */}
        {course.description?.[0]?.children?.[0]?.text && (
          <p
            style={{
              fontSize: "1.1rem",
              color: "#475569",
              lineHeight: "1.7",
              marginBottom: "2rem",
              textAlign: "justify",
            }}
          >
            {course.description[0].children[0].text}
          </p>
        )}

        {/* ===== Curriculum Section ===== */}
        <h2
          style={{
            color: "#1e293b",
            fontSize: "1.8rem",
            marginBottom: "1rem",
            fontWeight: "600",
          }}
        >
          📘 Curriculum
        </h2>

        {course.modules?.length > 0 ? (
          course.modules.map((mod, idx) => (
            <div
              key={mod.id}
              style={{
                background: "#f8fafc",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                marginBottom: "1rem",
                padding: "1rem 1.5rem",
              }}
            >
              {/* ===== Module Header ===== */}
              <div
                onClick={() => setOpenModule(openModule === idx ? null : idx)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ color: "#1e3a8a", margin: 0 }}>
                  {mod.module_name}
                </h3>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#475569",
                    transform: openModule === idx ? "rotate(90deg)" : "rotate(0)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  ▶
                </span>
              </div>

              {/* ===== Module Description ===== */}
              {mod.shortDescription?.[0]?.children?.[0]?.text && (
                <p style={{ color: "#334155", marginTop: "0.5rem" }}>
                  {mod.shortDescription[0].children[0].text}
                </p>
              )}

              {/* ===== Sections Dropdown ===== */}
              {openModule === idx && (
                <div style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
                  {mod.sections?.length > 0 ? (
                    mod.sections.map((sec) => (
                      <div
                        key={sec.id}
                        style={{
                          background: "#fff",
                          borderRadius: "8px",
                          padding: "0.8rem 1rem",
                          marginBottom: "0.6rem",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                        }}
                      >
                        <h4
                          style={{
                            color: "#0f172a",
                            marginBottom: "0.3rem",
                            fontWeight: "600",
                          }}
                        >
                          {sec.section_name}
                        </h4>
                        {sec.longDescription?.[0]?.children?.[0]?.text && (
                          <p
                            style={{
                              color: "#475569",
                              fontSize: "0.95rem",
                              lineHeight: "1.6",
                            }}
                          >
                            {sec.longDescription[0].children[0].text}
                          </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p style={{ color: "#64748b" }}>
                      No sections available for this module.
                    </p>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No modules available for this course.</p>
        )}
      </div>
    </Layout>
  )
}

export default CourseTemplate
