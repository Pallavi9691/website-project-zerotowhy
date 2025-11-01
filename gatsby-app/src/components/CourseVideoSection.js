import * as React from "react"
import Heading from "./Heading"

const CourseVideoSection = ({ title, description, modules, youtubeId }) => {
  return (
    <div>
      <style>{`
        .course-video-grid { display: grid; grid-template-columns: 1fr; gap: 30px; }
        @media (min-width: 768px) { .course-video-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>
      <div className="course-video-grid" style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '30px',
      backgroundColor: '#f9f9f9',
      padding: '3rem',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
      margin: '4rem 0',
      alignItems: 'center'
      }}>
      {/* Description Section */}
  <div style={{ minWidth: '200px', width: '100%' }}>
        <Heading style={{ fontSize: "2rem", marginBottom: "3rem" }}>{title}</Heading>
        <p style={{
          fontSize: "1rem",
          lineHeight: "1.7",
          color: "#4a4a4a",
          marginBottom: "1rem"
        }}>{description}</p>

        {modules && (
          <ul style={{ 
            fontSize: "1rem", 
            lineHeight: "1.6", 
            paddingLeft: "1.2rem", 
            color: "#4a4a4a" 
          }}>
            {modules.map((module, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>{module}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Video Section */}
  <div style={{ minWidth: '300px', width: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        {/* Responsive 16:9 iframe wrapper */}
        <div style={{ position: 'relative', width: '100%', paddingTop: '96.25%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: '0',
              borderRadius: '12px'
            }}
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default CourseVideoSection
